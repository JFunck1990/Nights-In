import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import TriviaContext from "../../utils/TriviaContext";
import DropdownInput from "../../components/DropdownInput";


function TriviaSetup() {
  const history = useHistory();

  const triviaInfo = useContext(TriviaContext);

  const [setupState, setSetupState] = useState({
    numberQuestions: 0,
    category: 0,
    difficulty: "",
    type: ""
  });

  const handleSubmit = () => {
    history.push("/trivia");
  };

  function handleInputChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    
    if (name === "difficulty") {
      value = value.toLowerCase();
    }
    else if (name === "numberQuestions") {
      value = parseInt(value);
    }
    else if (name === "type") {
      if (value === "Multiple Choice") {
        value = "multiple"
      }
      else {
        value = "boolean"
      }
    }
    else if (name === "category") {
      switch (value) {
        case "General Knowledge":
          value = 9;
          break;
        
        case "Books":
          value = 10;
          break;

        case "Film":
          value = 11;
          break;

        case "Music":
          value = 12;
          break;

        case "Musicals & Theatre":
          value = 13;
          break;

        case "Television":
          value = 14;
          break;

        case "Video Games":
          value = 15;
          break;

        case "Board Games":
          value = 16;
          break;

        case "Science & Nature":
          value = 17;
          break;

        case "Computer Science":
          value = 18;
          break;

        case "Mathematics":
          value = 19;
          break;

        case "Mythology":
          value = 20;
          break;

        case "Sports":
          value = 21;
          break;

        case "Geography":
          value = 22;
          break;

        case "History":
          value = 23;
          break;

        case "Politics":
          value = 24;
          break;

        case "Art":
          value = 25;
          break;

        case "Celebrities":
          value = 26;
          break;

        case "Animals":
          value = 27;
          break;

        case "Vehicles":
          value = 28;
          break;

        case "Comics":
          value = 29;
          break;

        case "Gadgets":
          value = 30;
          break;

        case "Anime & Manga":
          value = 31;
          break;

        case "Cartoons & Animations":
          value = 32;
          break;
        
        default:
      }
    }

    setSetupState({ ...setupState, [name]: value });
  }

  return (
    <div className="container pt-5">
      <div className="card-header text-center bg-warning">
        <h2>Setup your game!</h2>
      </div>
      <div className="card border border-dark">
        <DropdownInput 
          title="Number of Questions"
          handler={handleInputChange}
          name="numberQuestions"
          actions={["5", "10", "15", "20", "25", "30"]}
        />

        <DropdownInput 
          title="Category"
          handler={handleInputChange}
          name="category"
          actions={["General Knowledge", "Books", "Film", "Music", "Musicals & Theatre", "Television",
                    "Video Games", "Board Games", "Science & Nature", "Computer Science", "Mathematics",
                    "Mythology", "Sports", "Geography", "History", "Politics", "Art", "Celebrities",
                    "Animals", "Vehicles", "Comics", "Gadgets", "Anime & Manga", "Cartoons & Animations"]}
        />

        <DropdownInput 
          title="Difficulty"
          handler={handleInputChange}
          name="difficulty"
          actions={["Easy", "Medium", "Hard"]}
        />

        <DropdownInput 
          title="Answer Type"
          handler={handleInputChange}
          name="type"
          actions={["Multiple Choice", "True-False"]}
        />
        <button onClick={() => {console.log(setupState)}}>Console</button>
        <button className="btn btn-secondary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default TriviaSetup;
