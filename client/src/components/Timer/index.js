
import React, {useState, useRef, useEffect} from 'react';

const Timer = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const secondsPassed = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const date = new Date()
      secondsPassed.current = secondsPassed.current + 1;
      setTime(date.toLocaleTimeString());
    }, 1000);
    return () => {
      clearTimeout(timeout);
    }
  }, [time]);

  return (
    <div>
      <div>{time}</div>
      <div>{secondsPassed.current}</div>
    </div>
  )
}

export default Timer;