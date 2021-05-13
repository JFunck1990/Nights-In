import React from "react";

const TriviaContext = React.createContext({
  numberQuestions: 5,
  category: null,
  difficulty: "",
  type: "",
  changeContext: () => undefined
});

export default TriviaContext;
