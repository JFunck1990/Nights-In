import axios from "axios";
const BASEURL = "https://api.nylas.com/neural/categorize ";
const APIKEY = "6v0vISjHpME6OpopvCe1KK4wMJVQ1l";

const CalApi ={
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
      }
}

export default CalApi

// search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
// //   }

