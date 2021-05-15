import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import TriviaContext from "../../utils/TriviaContext";
import DropdownInput from "../../components/DropdownInput";
import './TriviaSetup.css';


function TriviaSetup() {
  const history = useHistory();

  const triviaInfo = useContext(TriviaContext);

  const [setupState, setSetupState] = useState({
    numberQuestions: 5,
    category: 9,
    difficulty: "easy",
    type: "multiple",
  });

  const [displayState, setDisplayState] = useState({
    numberQuestions: 5,
    category: "General Knowledge",
    difficulty: "Easy",
    type: "Multiple Choice"
  });

  const handleSubmit = () => {
    triviaInfo.changeContext(setupState);
    history.push("/trivia");
  };

  function handleInputChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    let displayValue = "";
    
    if (name === "difficulty") {
      displayValue = value;
      value = value.toLowerCase();
    }
    else if (name === "numberQuestions") {
      displayValue = value;
      value = parseInt(value);
    }
    else if (name === "type") {
      if (value === "Multiple Choice") {
        value = "multiple";
        displayValue = "Multiple Choice";
        
      }
      else {
        value = "boolean";
        displayValue = "True-False";
      }
    }
    else if (name === "category") {
      switch (value) {
        case "General Knowledge":
          value = 9;
          displayValue = "General Knowledge";
          break;
        
        case "Books":
          value = 10;
          displayValue = "Books";
          break;

        case "Film":
          value = 11;
          displayValue = "Film";
          break;

        case "Music":
          value = 12;
          displayValue = "Music";
          break;

        case "Musicals & Theatre":
          value = 13;
          displayValue = "Musicals & Theatre";
          break;

        case "Television":
          value = 14;
          displayValue = "Television";
          break;

        case "Video Games":
          value = 15;
          displayValue = "Video Games";
          break;

        case "Board Games":
          value = 16;
          displayValue = "Board Games";
          break;

        case "Science & Nature":
          value = 17;
          displayValue = "Science & Nature";
          break;

        case "Computer Science":
          value = 18;
          displayValue = "Computer Science";
          break;

        case "Mathematics":
          value = 19;
          displayValue = "Mathematics";
          break;

        case "Mythology":
          value = 20;
          displayValue = "Mythology";
          break;

        case "Sports":
          value = 21;
          displayValue = "Sports";
          break;

        case "Geography":
          value = 22;
          displayValue = "Geography";
          break;

        case "History":
          value = 23;
          displayValue = "History";
          break;

        case "Politics":
          value = 24;
          displayValue = "Politics";
          break;

        case "Art":
          value = 25;
          displayValue = "Art";
          break;

        case "Celebrities":
          value = 26;
          displayValue = "Celebrities";
          break;

        case "Animals":
          value = 27;
          displayValue = "Animals";
          break;

        case "Vehicles":
          value = 28;
          displayValue = "Vehicles";
          break;

        case "Comics":
          value = 29;
          displayValue = "Comics"
          break;

        case "Gadgets":
          value = 30;
          displayValue = "Gadgets";
          break;

        case "Anime & Manga":
          value = 31;
          displayValue = "Anime & Manga";
          break;

        case "Cartoons & Animations":
          value = 32;
          displayValue = "Cartoons & Animations";
          break;
        
        default:
      }
    }

    setSetupState({ ...setupState, [name]: value });
    setDisplayState({ ...displayState, [name]: displayValue });
  }

  return (
    <div className="container triviacontainer">
      {/* <div className="card-header text-center triviacontainer"> */}
        <h2>Setup your game!</h2>
      {/* </div> */}
      <div className="insidecontainer">
        <div className="row">
          <div className="col-lg-2 col-md-0"></div>
          <div className="col-lg-3 ">
            <DropdownInput 
              className="dropdown"
              title="Number of Questions"
              handler={handleInputChange}
              name="numberQuestions"
              actions={["5", "10", "15", "20", "25", "30"]}
            />
            <input className="inputs" value={displayState.numberQuestions} />
          </div>
          <div className="col-lg-1 col-md-0"></div>


          <div className="col-lg-3 ">
              <DropdownInput
                className="dropdown" 
                title="Category"
                handler={handleInputChange}
                name="category"
                actions={["General Knowledge", "Books", "Film", "Music", "Musicals & Theatre", "Television",
                          "Video Games", "Board Games", "Science & Nature", "Computer Science", "Mathematics",
                          "Mythology", "Sports", "Geography", "History", "Politics", "Art", "Celebrities",
                          "Animals", "Vehicles", "Comics", "Gadgets", "Anime & Manga", "Cartoons & Animations"]}
              />
              <input className="inputs" value={displayState.category} />
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-2 col-md-0"></div>
          <div className="col-lg-3 ">
            <DropdownInput 
              className="dropdown"
              title="Difficulty"
              handler={handleInputChange}
              name="difficulty"
              actions={["Easy", "Medium", "Hard"]}
            />
            <input className="inputs" value={displayState.difficulty} />
          </div>

          <div className="col-lg-1 col-md-0"></div>

          <div className="col-lg-3 col-md-0">
            <DropdownInput 
              className="dropdown"
              title="Answer Type"
              handler={handleInputChange}
              name="type"
              actions={["Multiple Choice", "True-False"]}
            />
            <input className="inputs" value={displayState.type} />
          </div>
         

        </div>

        <button className="btn btn-dark start" onClick={handleSubmit}>
          Start
        </button>
      </div>
    </div>
  );
}

export default TriviaSetup;
