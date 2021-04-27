import axios from "axios";

const API = {
  newQuestion: function() {
    return axios.get("https://opentdb.com/api.php?amount=1&category=15&difficulty=hard&type=multiple");
  }
};

export default API;
