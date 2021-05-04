import React from "react";

function Profile() {
  return (
    <div class="container">
  <header align="center" class="header-wrap">
    <h3>View or update your user</h3>
    <div class="userId">
      <h3>Welcome, 
        {/* {{userInfo.firstName}} */}
        </h3>
      <h5 id="user-number" data-useremail="{{userInfo.email}}">Account email: 
      {/* {{userInfo.email}} */}
      </h5>
    </div>
    <h3 id="update-err-msg"></h3>
  </header>

  <form id="user-form">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputFirst">First Name</label>
        <input type="text" class="form-control" id="inputFirst" value="{{userInfo.firstName}}" placeholder="John"></input>
      </div>
      <div class="form-group col-md-6">
        <label for="inputLast">Last Name</label>
        <input type="text" class="form-control" id="inputLast" value="{{userInfo.lastName}}" placeholder="Doe"></input>
      </div>
    </div>
  

    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputPassword">Email</label>
        <input type="text" class="form-control" id="inputEmail" value="{{userInfo.email}}"></input>
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword">Password</label>
        <input type="password" class="form-control" id="inputPassword" value="{{userInfo.password}}"></input>
      </div>
    </div>

    <div>
      <button type="submit" id="update-user" data-id="{{userInfo.id}}" class="btn btn-primary">Update</button>

      {/* {{#unless userInfo.isAdmin}} */}

        <button type="submit" id="delete-user" class="btn btn-primary">Delete</button>

      {/* {{/unless}} */}

      <button type="submit" id="view-user" data-id="{{userInfo.id}}" class="btn btn-primary">Refresh</button>
    </div>
  </form>

  <div class="modal" id="delete-user-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Re-Enter Credentials to delete user</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <h3></h3>
          <form>
            <div class="form-group">
              <label for="userEmail">Email:</label>
              <input type="text" class="form-control" id="userEmail"></input>
            </div>
            <div class="form-group">
              <label for="userPassword">Password:</label>
              <input type="password" class="form-control" id="userPassword"></input>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button id="confirm-delete" type="button" data-id="{{userInfo.id}}" class="btn btn-primary">Confirm Delete</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Nah I'll stay</button>
        </div>
      </div>
    </div>
  </div>
</div>
)};


export default Profile;
