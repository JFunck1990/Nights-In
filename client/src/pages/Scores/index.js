import React, { useState, useEffect } from "react";
import "./Scores.css";
import API from "../../utils/API";
import ScoreEntry from "../../components/ScoreEntry";

function Scores() {
  const [highScores, setHighScores] = useState([]);
  const [lowScores, setLowScores] = useState([]);

  useEffect(() => {
    API.getScores()
      .then(({ data }) => {
        const tempHigh = [];
        const tempLow = [];

        data.forEach((object) => {
          if (object.isHigh) {
            tempHigh.push(object);
          }
          else {
            tempLow.unshift(object);
          }
        });

        setHighScores(tempHigh);
        setLowScores(tempLow);
      });
  }, []);

  return (
    <div className="container p-5">
      <div className="row">
        {/* HIGH SCORE LIST */}
        <div className="col-md-6 col-xs-12">
          <div className="card border" id="radius">
            <div className="cardheader bg-head" id="radiushead">
              <p className="text-center">HIGH SCORES</p>
            </div>

            <div className="card-body">
              <ol className="list-group list-group-flush pl-2 scorefont">
                {
                  highScores.map((entry, index) => {
                    return <ScoreEntry key={index} entry={entry}/>
                  })
                }
              </ol>
            </div>
          </div>
        </div>
        {/* LOSER SCORE LIST */}
        <div className="col-md-6 col-xs-12">
          <div className="card border" id="radius">

            <div className="cardheader bg-head" id="radiushead">
              <p className="text-center">LOW SCORES</p>
            </div>

            <div className="card-body ">
              <ol className="list-group list-group-flush pl-2 scorefont">
                {
                  lowScores.map((entry, index) => {
                    return <ScoreEntry key={index} entry={entry}/>
                  })
                }
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scores;