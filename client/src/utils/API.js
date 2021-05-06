import axios from "axios";

const API = {
  newQuestion: function() {
    return axios.get("https://opentdb.com/api.php?amount=1&type=multiple");
  },
  sendInvite: function(data) {
    return axios.get("/api/invite", {
        params: {
          subject: data.subject,
          name: data.name,
          email: data.email,
          body: data.body
        }
      }
    );
  },
  createUser: function(data) {
    return axios.post("/api/register", data);
  },
  login: function(data) {
    console.log(data);
    // return axios.post("/api/login", data);
  }
};

export default API;
