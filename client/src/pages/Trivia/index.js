import React, { useState, useEffect, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Trivia.css";
import { decode } from "html-entities";
import API from "../../utils/API";
import TriviaContext from "../../utils/TriviaContext";
import LoggedInContext from "../../utils/LoggedInContext";
import Question from "../../components/Question";
import Answer from "../../components/Answer";
import Timer from "../../components/Timer";

function Trivia() {
  const history = useHistory();

  const triviaInfo = useContext(TriviaContext);
  const userInfo = useContext(LoggedInContext);

  const secondsPassed = useRef(60);

  const [allQuestions, setAllQuestions] = useState([]);

  const [questionState, setQuestionState] = useState({
    question: "",
    correct: "",
    incorrect: [],
    index: -1,
    difficulty: ""
  });

  const [choicesState, setChoicesState] = useState([]);

  const [pageState, setPageState] = useState({
    score: 0,
    answer: ""
  });

  const decodeHTMLEntities = (string) => {
    let indexAmpersand = -1;

    while (string.indexOf("&", indexAmpersand + 1) > -1) {
      indexAmpersand = string.indexOf("&", indexAmpersand + 1);

      const indexSemiColon = string.indexOf(";", indexAmpersand);

      const entity = string.substring(indexAmpersand, indexSemiColon + 1);

      string = string.replace(entity, decode(entity));
    }

    return string;
  };

  const handleNewQuestion = () => {
    const nextQuestion = allQuestions[questionState.index + 1];

    if (nextQuestion) {
      const incorrect = nextQuestion.incorrect_answers;
      let answers = [decode(incorrect[0]), decode(incorrect[1]), decode(incorrect[2])];

      setQuestionState({
        question: decodeHTMLEntities(nextQuestion.question),
        correct: decodeHTMLEntities(nextQuestion.correct_answer),
        incorrect: answers,
        index: questionState.index + 1,
        difficulty: nextQuestion.difficulty
      });
    }

    if (questionState.index === allQuestions.length - 1 && questionState.index > -1) {
      gameover();
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const value = event.target.value

    if(value !== questionState.correct) {
      setPageState({ ...pageState, answer: "Wrong!"});
    }
    else {
      let addedScore;

      switch (questionState.difficulty) {
        case "easy":
          addedScore = 5;
          break;

        case "medium":
          addedScore = 10;
          break;

        case "hard":
          addedScore = 15;
          break;

        default:
          addedScore = 10;
          console.log("Error: Difficulty was an unexpected result: ", questionState.difficulty);
      }

      setPageState({ score: pageState.score + addedScore, answer: "Correct!"});
    }
  }

  const gameover = () => {
    API.postScore({
      username: userInfo.username,
      score: pageState.score + secondsPassed.current
    })
      .then(() => history.push("/scores"));
  }

  useEffect(() => {
    API.getQuestions(triviaInfo)
      .then((res) => {
        setAllQuestions(res.data.results);
      });
  }, []);

  useEffect(() => {
    handleNewQuestion();
  }, [allQuestions, pageState]);

  useEffect(() => {
    if (triviaInfo.type === "multiple") {
      let choices = [questionState.correct];

      for (let index = 0; index < 3; index++) {
        const random = Math.floor(Math.random() * 2);

        if (random === 0) {
          choices.unshift(questionState.incorrect[index]);
        } else {
          choices.push(questionState.incorrect[index]);
        }
      }

      setChoicesState(choices);
    }
    else {
      setChoicesState(["True", "False"]);
    }
  }, [questionState]);

  useEffect(() => {console.log(questionState.correct)}, [choicesState])

  return (
    <div className="container pt-5">
      <div className="timer">
        <span id="time">
          <Timer secondsPassed={secondsPassed} score={pageState.score} gameover={gameover} />
        </span>
      </div>

      {/* Card */}
      <div className="card border border-dark">
        {/* Trivia Question */}

        <Question
          category={questionState.category}
          question={questionState.question}
        />
        {/* Answers */}
        <div className="card-body">
          <div
            className="col-lg-12 text-center pt-1 pb-1"
            onClick={handleFormSubmit}
          >
            <Answer choice={choicesState[0]} />
          </div>

          <div
            className="col-lg-12 text-center pt-1 pb-1"
            onClick={handleFormSubmit}
          >
            <Answer choice={choicesState[1]} />
          </div>

          { triviaInfo.type === "multiple" ?
            <>
              <div
                className="col-lg-12 text-center pt-1 pb-1"
                onClick={handleFormSubmit}
              >
                <Answer choice={choicesState[2]} />
              </div>

              <div
                className="col-lg-12 text-center pt-1 pb-1"
                onClick={handleFormSubmit}
              >
                <Answer choice={choicesState[3]} />
              </div>
            </>
          :
            null
          }

          <div>
            <h1 className="text-center p-2">{pageState.answer}</h1>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Trivia;
