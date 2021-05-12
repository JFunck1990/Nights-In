import React from "react";

const TriviaContext = React.createContext({
  loggedIn: false,
  id: -1,
  username: ""
});

export default TriviaContext;
