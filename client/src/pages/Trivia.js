import React, { useState, useEffect } from "react";
import Question from "../components/Question";
import Answer from "../components/Answer";
import API from "../utils/API";

function App() {
  const [questionState, setQuestionState] = useState({
    question: "",
    correct: "",
    incorrect: []
  });

  const [choicesState, setChoicesState] = useState([]);

  const handleNewQuestion = () => {
    API.newQuestion()
      .then(res => {
        const questionObj = res.data.results[0];
        setQuestionState({
          question: questionObj.question,
          correct: questionObj.correct_answer,
          incorrect: questionObj.incorrect_answers
        });
      });
  };

  useEffect(() => {
    handleNewQuestion();
  }, []);

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
      {/* Card */}
      <div className="card border border-dark">
        {/* Trivia Question */}         
        <div className="card-header text-center bg-warning">
          <h3><Question question={questionState.question} /></h3>
        </div>
        {/* Answers */}
        <div className="card-body">
          <div className="col-lg-12 text-center pt-1 pb-1">
            <Answer choice={choicesState[0]} />
          </div>
          
          <div className="col-lg-12 text-center pt-1 pb-1">
            <Answer choice={choicesState[1]} />
          </div>

          <div className="col-lg-12 text-center pt-1 pb-1">
            <Answer choice={choicesState[2]} />
          </div>

          <div className="col-lg-12 text-center pt-1 pb-1">
            <Answer choice={choicesState[3]} />
          </div>
        
          <div className="col-lg-12 text-center">
            <button className="btn btn-success" onClick={handleNewQuestion}>Next Question</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
