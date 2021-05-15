import axios from "axios";

const API = {
  getQuestions: function(data) {
    let queryURL = "https://opentdb.com/api.php?amount=5";

    if (data.numberQuestions !== 5) {
      queryURL = queryURL.replace("5", data.numberQuestions);
    }

    if (data.category) {
      queryURL = queryURL + `&category=${data.category}`;
    }

    if (data.difficulty) {
      queryURL = queryURL + `&difficulty=${data.difficulty}`;
    }

    if (data.type) {
      queryURL = queryURL + `&type=${data.type}`;
    }

    return axios.get(queryURL);
  },
  getScores: function() {
    return axios.get("/api/scores");
  },
  postScore: function({ username, score }) {
    return axios.post("/api/scores", {
      username: username,
      score: score,
      id: -1
    });
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
  updateUser: function(data) {
    return axios.put(`/api/user/${data.id}`, {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      email: data.email,
      currentPassword: data.currentPassword,
      newPassword: data.newPassword
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
