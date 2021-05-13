import React from "react";
import "./Scores.css";
import ScoreEntry from "../../components/ScoreEntry";

function Scores() {
  return (
    <div class="container p-5">
      <div className="row">
        {/* HIGH SCORE LIST */}
        <div class="col-md-6 col-xs-12">
          <div className="card border" id="radius">
            <div className="cardheader bg-head" id="radiushead">
              <p className="text-center">HIGH SCORES</p>
            </div>

            <div class="card-body">
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

      {/* LOSER SCORE LIST */}
        <div class="col-md-6 col-xs-12">
          <div className="card border" id="radius">

            <div className="cardheader bg-head" id="radiushead">
              <p className="text-center">LOW SCORES</p>
            </div>

            <div class="card-body ">
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