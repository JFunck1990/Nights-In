import React, { useState, useEffect } from "react";
import "./Trivia.css";
import { decode } from "html-entities";
import API from "../../utils/API";
import Question from "../../components/Question";
import Answer from "../../components/Answer";
import Timer from "../../components/Timer";

function App() {
  const [questionState, setQuestionState] = useState({
    question: "",
    correct: "",
    incorrect: [],
    category:"",
    answer: ""
  });

  const [choicesState, setChoicesState] = useState([]);
  let score = 0;



  const decodeHTMLEntities = (string) => {
    while (string.indexOf("&") > -1) {
      const indexAmpersand = string.indexOf("&");

      const indexSemiColon = string.indexOf(";", indexAmpersand);

      const entity = string.substring(indexAmpersand, indexSemiColon + 1);

      string = string.replace(entity, decode(entity));
    }

    return string;
  };

  const handleNewQuestion = () => {
    API.newQuestion()
      .then(res => {
        console.log("This is the API", res);
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



  useEffect(() => {
    handleNewQuestion();
  }, []);

  useEffect(() => {
    let choices = [questionState.correct];
    console.log(choices);

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




    function handleFormSubmit (event) {
    event.preventDefault();
    // if(choicesState !== questionState.correct ){
    //   console.log("wrong");
    // } else {
    //   console.log("Correct")
    // }
    // choicesState.map(results => {

    // });


    const value = event.target.id

   console.log("this is the value: ",value);
   if(value !== questionState.correct){
     console.log("Wrong!");
     score -= 1;
     console.log("your score is", score);
    setQuestionState({...questionState, answer: "Wrong!"})
   } else {
     console.log("Correct!");
     score += 1;
     console.log("your srote is", score);
     setQuestionState({...questionState, answer: "Correct!"})
   }



}



  return (
    <div className="container pt-5">
      {/* <div class="timer">Time: <span id="time"><Timer></Timer></span></div> */}

      {/* Card */}
      <div className="card border border-dark">
        {/* Trivia Question */}
        <div className="card-header text-center bg-warning">
          <h3><Question question={questionState.question} /></h3>
        </div>
        {/* Answers */}
        <div className="card-body">
          <div className="col-lg-12 text-center pt-1 pb-1" onClick={handleFormSubmit}>
            <Answer  choice={choicesState[0]}  />
          </div>

          <div className="col-lg-12 text-center pt-1 pb-1"  onClick={handleFormSubmit}>
            <Answer choice={choicesState[1]}  />
          </div>

          <div className="col-lg-12 text-center pt-1 pb-1"  onClick={handleFormSubmit}>
            <Answer choice={choicesState[2]}  />
          </div>

          <div className="col-lg-12 text-center pt-1 pb-1"  onClick={handleFormSubmit}>
            <Answer choice={choicesState[3]}  />
          </div>
          <div>
            <h1>{questionState.answer}</h1>
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
