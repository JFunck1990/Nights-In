import React from "react";

const LoggedInContext = React.createContext({
  loggedIn: false,
  id: -1,
  username: "",
  chatRooms: "",
  changeContext: () => undefined
});

export default LoggedInContext;
