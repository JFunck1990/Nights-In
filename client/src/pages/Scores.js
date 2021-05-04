import React from "react";
// import style from './style.css';

function Scores() {
  return (
  
    <div class="container p-5">
      <div className="row">

      {/* HIGHT SCORE LIST */}
        <div class="col-md-6 col-xs-12">
          <div className="card border border-dark">

            <div className="cardheader bg-warning">
              <h1 className="text-center">HIGH SCORES</h1>
            </div>

            <div class="card-body">
              <ol className="list-group pl-2">

                <li>
                  <div className="d-flex flex-row">
                  <div className="col-md-6 d-flex justify-content-start">Zach</div>
                  <div className="col-md-6 d-flex justify-content-end">100</div>
                  </div>
                </li>

                <li>
                  <div className="d-flex flex-row">
                  <div className="col-md-6 d-flex justify-content-start">Jack</div>
                  <div className="col-md-6 d-flex justify-content-end">100</div>
                  </div>
                </li>

                <li>
                  <div className="d-flex flex-row">
                  <div className="col-md-6 d-flex justify-content-start">Kate</div>
                  <div className="col-md-6 d-flex justify-content-end">100</div>
                  </div>
                </li>

                <li>
                  <div className="d-flex flex-row">
                  <div className="col-md-6 d-flex justify-content-start">JP</div>
                  <div className="col-md-6 d-flex justify-content-end">100</div>
                  </div>
                </li>

                <li>
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
          <div className="card border border-dark">

            <div className="cardheader bg-warning">
              <h1 className="text-center">LOW SCORES</h1>
            </div>

            <div class="card-body">
              <ol className="list-group pl-2">

                <li>
                    <div className="d-flex flex-row">
                    <div className="col-md-6 d-flex justify-content-start">Zach</div>
                    <div className="col-md-6 d-flex justify-content-end">100</div>
                    </div>
                  </li>

                  <li>
                    <div className="d-flex flex-row">
                    <div className="col-md-6 d-flex justify-content-start">Jack</div>
                    <div className="col-md-6 d-flex justify-content-end">100</div>
                    </div>
                  </li>

                  <li>
                    <div className="d-flex flex-row">
                    <div className="col-md-6 d-flex justify-content-start">Kate</div>
                    <div className="col-md-6 d-flex justify-content-end">100</div>
                    </div>
                  </li>

                  <li>
                    <div className="d-flex flex-row">
                    <div className="col-md-6 d-flex justify-content-start">JP</div>
                    <div className="col-md-6 d-flex justify-content-end">100</div>
                    </div>
                  </li>

                  <li>
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