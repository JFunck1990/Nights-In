import React, { useState, useEffect } from "react";
import "./Scores.css";
import API from "../../utils/API";
import ScoreEntry from "../../components/ScoreEntry";

function Scores() {
  const [highScores, setHighScores] = useState([]);
  const [lowScores, setLowScores] = useState([]);

  useEffect(() => {
    API.getScores()
      .then(res => {
        console.log(res);
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
                <ScoreEntry username="Zac" score="90" />

                <ScoreEntry username="Zac" score="80" />

                <ScoreEntry username="Zac" score="70" />

                <ScoreEntry username="Zac" score="60" />

                <ScoreEntry username="Zac" score="50" />
              </ol>
            </div>
          </div>
        </div>
        <button onClick={() => {API.postScore()}}>Add Score</button>
        {/* LOSER SCORE LIST */}
        <div className="col-md-6 col-xs-12">
          <div className="card border" id="radius">

            <div className="cardheader bg-head" id="radiushead">
              <p className="text-center">LOW SCORES</p>
            </div>

            <div className="card-body ">
              <ol className="list-group list-group-flush pl-2 scorefont">
                <ScoreEntry username="Zac" score="0" />

                <ScoreEntry username="Zac" score="10" />

                <ScoreEntry username="Zac" score="20" />

                <ScoreEntry username="Zac" score="30" />

                <ScoreEntry username="Zac" score="40" />
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scores;