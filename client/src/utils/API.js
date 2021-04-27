import axios from "axios";

const API = {
  newQuestion: function() {
    // return fetch("https://opentdb.com/api.php?amount=1&category=15&difficulty=hard&type=multiple", {
    //     method: "GET"
    // });

    return axios.get("https://opentdb.com/api.php?amount=1&category=15&difficulty=hard&type=multiple");
  }
};

export default API;
