import axios from "axios";

const API = {
  newQuestion: function() {
    return axios.get("https://opentdb.com/api.php?amount=10&type=multiple");
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
  getUser: function(id) {
    return axios.get("/api/get-user", {
      params: {
        id: id
      }
    });
  },
  login: function(data) {
    return axios.post("/api/login", data);
  },
  logout: function() {
    return axios.get("/api/logout");
  }
};

export default API;
