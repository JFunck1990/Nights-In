import axios from "axios";

const API = {
  newQuestion: function() {
    return axios.get("https://opentdb.com/api.php?amount=1&type=multiple");
  },
  sendInvite: function() {
    return axios.get("/api/invite");
  }
};

export default API;
