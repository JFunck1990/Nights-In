import React from "react";
import "./style.css";

function Scores() {
  return (
  
    <div class="container p-5">
      <div className="row">

      {/* HIGHT SCORE LIST */}
        <div class="col-md-6 col-xs-12">
          <div className="card border" id="radius">

            <div className="cardheader bg-head border-warning border-3" id="radiushead">
              <p className="text-center">HIGH SCORES</p>
            </div>

            <div class="card-body">
              <ol className="list-group list-group-flush pl-2 scorefont">

                <li className="list-group-item">
                  <div className="d-flex flex-row">
                  <div className="col-md-6 d-flex justify-content-start">Zach</div>
                  <div className="col-md-6 d-flex justify-content-end">100</div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="d-flex flex-row">
                  <div className="col-md-6 d-flex justify-content-start">Jack</div>
                  <div className="col-md-6 d-flex justify-content-end">100</div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="d-flex flex-row">
                  <div className="col-md-6 d-flex justify-content-start">Kate</div>
                  <div className="col-md-6 d-flex justify-content-end">100</div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="d-flex flex-row">
                  <div className="col-md-6 d-flex justify-content-start">JP</div>
                  <div className="col-md-6 d-flex justify-content-end">100</div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="d-flex flex-row">
                  <div className="col-md-6 d-flex justify-content-start">Matt</div>
                  <div className="col-md-6 d-flex justify-content-end">100</div>
                  </div>
                </li>
            
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

              <li className="list-group-item">
                    <div className="d-flex flex-row">
                    <div className="col-md-6 d-flex justify-content-start">Zach</div>
                    <div className="col-md-6 d-flex justify-content-end">100</div>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="d-flex flex-row">
                    <div className="col-md-6 d-flex justify-content-start">Jack</div>
                    <div className="col-md-6 d-flex justify-content-end">100</div>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="d-flex flex-row">
                    <div className="col-md-6 d-flex justify-content-start">Kate</div>
                    <div className="col-md-6 d-flex justify-content-end">100</div>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="d-flex flex-row">
                    <div className="col-md-6 d-flex justify-content-start">JP</div>
                    <div className="col-md-6 d-flex justify-content-end">100</div>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="d-flex flex-row">
                    <div className="col-md-6 d-flex justify-content-start">Matt</div>
                    <div className="col-md-6 d-flex justify-content-end">100</div>
                    </div>
                  </li>

              </ol>
            </div>

          </div>

        </div>

      </div>
    
    </div>
  )
   
              
          
                
}

export default Scores;