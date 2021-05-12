import React, { useState, useEffect } from "react";
import "./Trivia.css";
import { decode } from "html-entities";
import API from "../../utils/API";
import Question from "../../components/Question";
import Answer from "../../components/Answer";
import Timer from "../../components/Timer";
import useDebounce from "../../utils/debounceHook"

function App() {
  const [questionState, setQuestionState] = useState({
    question: "",
    correct: "",
    incorrect: []
  });

  const [choicesState, setChoicesState] = useState([]);

  const [pageState, setPageState] = useState({
    score: 0,
    answer: ""
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
    API.newQuestion()
      .then(res => {
        const questionObj = res.data.results[0];
        const incorrect = questionObj.incorrect_answers;
        const answers = [decode(incorrect[0]), decode(incorrect[1]), decode(incorrect[2])];

        setQuestionState({
          question: decodeHTMLEntities(questionObj.question),
          correct: decodeHTMLEntities(questionObj.correct_answer),
          incorrect: answers
        });
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const value = event.target.id

    if(value !== questionState.correct){
      setPageState({ score: pageState.score - 1, answer: "Wrong!"});
    }
    else {
      setPageState({ score: pageState.score + 1, answer: "Correct!"});
    }

    handleNewQuestion();
  }

  useEffect(() => {
    if(debouncedSearchTerm){
      handleNewQuestion();
    }
  }, [debouncedSearchTerm]);

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
