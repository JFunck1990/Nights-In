import React from "react";

const TriviaContext = React.createContext({
  numberQuestions: 0,
  category: 0,
  difficulty: "",
  type: "",
  changeContext: () => undefined
});

export default TriviaContext;
