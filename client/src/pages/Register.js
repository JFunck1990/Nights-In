import React from "react";

function Register() {
  return (
    <div className="container">
        <div className="row">
            <div className="col col-md-12">
            <header className="create-user-wrap header-wrap" align="center">
                <h1>Create Your Account</h1>
                <h3 id="create-err-msg"></h3>
            </header>

            <h3 id="err-msg"></h3>

            <form id= "create-form">
                <div className="form-row">
                <div className="form-group col-md-12">
                    <label for="inputFirst">First Name</label>
                    <input type="text" className="form-control" id="inputFirst" placeholder="John" />
                </div>
                </div>

                <div className="form-row">
                <div className="form-group col-md-12">
                    <label for="inputLast">Last Name</label>
                    <input type="text" className="form-control" id="inputLast" placeholder="Doe"/>
                </div>
                </div>

                <div className="form-row">
                <div className="form-group col-md-12">
                    <label for="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                </div>
                </div>

                <div className="form-row">
                <div className="form-group col-md-12">
                    <label for="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                </div>
                </div>

                <div>
                <h2 id="message"></h2>
                </div>

                <button type="submit" id="add-user" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    </div>
  );
}

export default Register;
