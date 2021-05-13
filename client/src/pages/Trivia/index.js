import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Trivia.css";
import { decode } from "html-entities";
import API from "../../utils/API";
import TriviaContext from "../../utils/TriviaContext";
import Question from "../../components/Question";
import Answer from "../../components/Answer";
import Timer from "../../components/Timer";

function App() {
  const history = useHistory();

  const triviaInfo = useContext(TriviaContext);

  const [allQuestions, setAllQuestions] = useState([]);

  const [questionState, setQuestionState] = useState({
    question: "",
    correct: "",
    incorrect: [],
    index: -1
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
      const answers = [decode(incorrect[0]), decode(incorrect[1]), decode(incorrect[2])];

      setQuestionState({
        question: decodeHTMLEntities(nextQuestion.question),
        correct: decodeHTMLEntities(nextQuestion.correct_answer),
        incorrect: answers,
        index: questionState.index + 1
      });
    }

    if (questionState.index === allQuestions.length - 1 && questionState.index > -1) {
      gameover();
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const value = event.target.value

    if(value !== questionState.correct){
      setPageState({ score: pageState.score - 1, answer: "Wrong!"});
    }
    else {
      setPageState({ score: pageState.score + 1, answer: "Correct!"});
    }

    handleNewQuestion();
  }

  const gameover = () => {
    history.push("/scores");
  }

  useEffect(() => {
    API.getQuestions(triviaInfo)
      .then((res) => {
        setAllQuestions(res.data.results);
      });
  }, []);

  useEffect(() => {
    handleNewQuestion();
  }, [allQuestions]);

  useEffect(() => {
    let choices = [questionState.correct];

    for (let index = 0; index < 3; index ++) {
      const random = Math.floor(Math.random() * 2);

      if (random === 0) {
        choices.unshift(questionState.incorrect[index]);
      }
      else {
        choices.push(questionState.incorrect[index]);
      }
    }

    setChoicesState(choices);
  }, [questionState]);

  return (
    <div className="container pt-5">
      <Timer score={pageState.score} />

      {/* Card */}
      <div className="card border border-dark">
        {/* Trivia Question */}
        <Question question={questionState.question} />
        {/* Answers */}
        <div className="card-body">
          <Answer handler={handleFormSubmit} choice={choicesState[0]} />

          <Answer handler={handleFormSubmit} choice={choicesState[1]} />

          <Answer handler={handleFormSubmit} choice={choicesState[2]} />

          <Answer handler={handleFormSubmit} choice={choicesState[3]} />
          <div>
            <h1 className="text-center">{pageState.answer}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
