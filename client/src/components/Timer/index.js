
import React, {useState, useRef, useEffect} from 'react';
import { useHistory } from "react-router-dom";

const Timer = (props) => {
  let history = useHistory();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const secondsPassed = useRef(5000);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const date = new Date()
      secondsPassed.current = secondsPassed.current - 1;
      setTime(date.toLocaleTimeString());
    }, 1000);
    return () => {
      clearTimeout(timeout);
      // look up react router redirect
      if(secondsPassed.current <= 0){
        history.push("/scores");
      }
    }

  }, [time]);





  return (
    <div>
      <div>Time: {time}</div>
      <div>Timer: {secondsPassed.current}</div>
      <div>Score: {props.score}</div>
    </div>
  )
}

export default Timer;