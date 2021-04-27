import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Answer from "./components/Answer";
import API from "./utils/API";

function App() {
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

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Question question={questionState.question} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <Answer choice={questionState.correct} />
        </div>
        <div className="col-lg-6">
          <Answer choice={questionState.incorrect[0]} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <Answer choice={questionState.incorrect[1]} />
        </div>
        <div className="col-lg-6">
          <Answer choice={questionState.incorrect[2]} />
        </div>
      </div>

      <button className="btn btn-success" onClick={handleNewQuestion}>New Question</button>
    </div>
  );
}

export default App;
