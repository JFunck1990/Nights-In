import React, { useState, useEffect } from "react";
import "./Trivia.css";
import { decode } from "html-entities";
import API from "../../utils/API";
import Question from "../../components/Question";
import Answer from "../../components/Answer";
import Timer from "../../components/Timer";
import useDebounce from "../../utils/debounceHook";

function App() {
  const [questionState, setQuestionState] = useState({
    question: "",
    correct: "",
    incorrect: [],
  });

  const [choicesState, setChoicesState] = useState([]);

  const [pageState, setPageState] = useState({
    score: 0,
    answer: "",
  });

  const debouncedSearchTerm = useDebounce(50000);

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
    API.newQuestion().then((res) => {
      const questionObj = res.data.results[0];
      const incorrect = questionObj.incorrect_answers;
      const answers = [
        decode(incorrect[0]),
        decode(incorrect[1]),
        decode(incorrect[2]),
      ];

      setQuestionState({
        question: decodeHTMLEntities(questionObj.question),
        correct: decodeHTMLEntities(questionObj.correct_answer),
        incorrect: answers,
        category: decodeHTMLEntities(questionObj.category),
      });
    });
  };
  useEffect(() => {
    if (debouncedSearchTerm) {
      handleNewQuestion();
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
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
  }, [questionState]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const value = event.target.id;
    console.log("Value: ", value);
    console.log(pageState.score + 5);

    if (value !== questionState.correct) {
      console.log("Wrong!");

      setPageState({ score: pageState.score - 1, answer: "Wrong!" });
      handleNewQuestion();
    } else {
      console.log("Correct!");

      setPageState({ score: pageState.score + 1, answer: "Correct!" });
      handleNewQuestion();
    }
  };

  return (
    <div className="container pt-5">
      <div class="timer">
        <span id="time">
          <Timer score={pageState.score}></Timer>
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
          <div>
            <h1>{pageState.answer}</h1>
          </div>

          <div className="col-lg-12 text-center">
            <button className="btn btn-success" onClick={handleNewQuestion}>
              Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
