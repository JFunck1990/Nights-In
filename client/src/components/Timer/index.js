import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Timer.css";
const Timer = (props) => {
  let history = useHistory();

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const secondsPassed = useRef(500);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const date = new Date();

      secondsPassed.current = secondsPassed.current - 1;

      setTime(date.toLocaleTimeString());
    }, 1000);

    return () => {
      clearTimeout(timeout);

      if (secondsPassed.current <= 0) {
        history.push("/scores");
      }
    };
  }, [time]);

  return (
    <div className="card-body bg-warning">
      <div className="time">Time: {secondsPassed.current}</div>
      <div className="score">Score: {props.score}</div>
    </div>
  );
};

export default Timer;
