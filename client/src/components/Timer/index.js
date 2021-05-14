import React, { useState, useRef, useEffect } from "react";
import "./Timer.css";

const Timer = ({ score, gameover }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const secondsPassed = useRef(60);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const date = new Date();

      secondsPassed.current = secondsPassed.current - 1;

      setTime(date.toLocaleTimeString());
    }, 1000);

    return () => {
      clearTimeout(timeout);

      if (secondsPassed.current <= 0) {
        gameover();
      }
    };
  }, [time]);

  return (
    <div className="card-body bg-warning">
      <div className="time">Time: {secondsPassed.current}</div>
      <div className="score">Score: {score}</div>
    </div>
  );
};

export default Timer;
