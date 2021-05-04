import React, { useState, useEffect } from "react";
import Question from "../components/Question";
import Answer from "../components/Answer";
import API from "../utils/API";

function Trivia() {
  const [questionState, setQuestionState] = useState({
    question: "",
    correct: "",
    incorrect: []
  });

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
    setQuestionState({
      question: "Which monster in \"Monster Hunter Tri\" was causing earthquakes in Moga Village?",
      correct: "Ceadeus",
      incorrect: [
        "Alatreon",
        "Rathalos",
        "Lagiacrus"
      ]
    });
  }, []);

  const handleClick = () => {
    API.sendInvite()
      .then(res => console.log(res.data));
  }

  return (
    <div className="container pt-5">
      <button onClick={handleClick}>Button</button>
      {/* Card */}
      <div className="card border border-dark">
        {/* Trivia Question */}         
        <div className="card-header text-center bg-warning">
          <h3><Question question={questionState.question} /></h3>
        </div>
            {/* Answers */}
          <div className="card-body">
              <div className="col-lg-12 text-center pt-1 pb-1">
                <Answer choice={questionState.correct} />
              </div>
              
              <div className="col-lg-12 text-center pt-1 pb-1">
                <Answer choice={questionState.incorrect[0]} />
              </div>

              <div className="col-lg-12 text-center pt-1 pb-1">
                <Answer choice={questionState.incorrect[1]} />
              </div>

              <div className="col-lg-12 text-center pt-1 pb-1">
                <Answer choice={questionState.incorrect[2]} />
              </div>

              <div className="col-lg-12 text-center">
                <button className="btn btn-success" onClick={handleNewQuestion}>Next Question</button>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Trivia;
