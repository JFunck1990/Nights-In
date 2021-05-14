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
    type: "multiple"
  });

  const handleSubmit = () => {
    triviaInfo.changeContext(setupState);
    history.push("/trivia");
  };

  function handleInputChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    let cat = event.target.cat;
    let ty = event.target.ty;
    
    if (name === "difficulty") {
      value = value.toLowerCase();
    }
    else if (name === "numberQuestions") {
      value = parseInt(value);
    }
    else if (name === "type") {
      if (value === "Multiple Choice") {
        value = "multiple";
        ty = "Multiple Choice";
        
      }
      else {
        value = "boolean";
        ty = "True-False";
      }
    }
    else if (name === "category") {
      switch (value) {
        case "General Knowledge":
          value = 9;
          cat = "General Knowledge";
          break;
        
        case "Books":
          value = 10;
          cat = "Books";
          break;

        case "Film":
          value = 11;
          cat = "Film";
          break;

        case "Music":
          value = 12;
          cat = "Music";
          break;

        case "Musicals & Theatre":
          value = 13;
          cat = "Musicals & Theatre";
          break;

        case "Television":
          value = 14;
          cat = "Television";
          break;

        case "Video Games":
          value = 15;
          cat = "Video Games";
          break;

        case "Board Games":
          value = 16;
          cat = "Board Games";
          break;

        case "Science & Nature":
          value = 17;
          cat = "Science & Nature";
          break;

        case "Computer Science":
          value = 18;
          cat = "Computer Science";
          break;

        case "Mathematics":
          value = 19;
          cat = "Mathematics";
          break;

        case "Mythology":
          value = 20;
          cat = "Mythology";
          break;

        case "Sports":
          value = 21;
          cat = "Sports";
          break;

        case "Geography":
          value = 22;
          cat = "Geography";
          break;

        case "History":
          value = 23;
          cat = "History";
          break;

        case "Politics":
          value = 24;
          cat = "Politics";
          break;

        case "Art":
          value = 25;
          cat = "Art";
          break;

        case "Celebrities":
          value = 26;
          cat = "Celebrities";
          break;

        case "Animals":
          value = 27;
          cat = "Animals";
          break;

        case "Vehicles":
          value = 28;
          cat = "Vehicles";
          break;

        case "Comics":
          value = 29;
          cat = "Comics"
          break;

        case "Gadgets":
          value = 30;
          cat = "Gadgets";
          break;

        case "Anime & Manga":
          value = 31;
          cat = "Anime & Manga";
          break;

        case "Cartoons & Animations":
          value = 32;
          cat = "Cartoons & Animations";
          break;
        
        default:
      }
    }

    setSetupState({ ...setupState, [name]: value, category: cat, type: ty });
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
            <input className="inputs" defaultValue={"5"}value={setupState.numberQuestions} />
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
              <input className="inputs" defaultValue={"General Knowledge"} value={setupState.category} />
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
            <input className="inputs" defaultValue={"Easy"} value={setupState.difficulty} />
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
            <input className="inputs" defaultValue={"Multiple Choice"} value={setupState.type} />
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
