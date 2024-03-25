import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
  
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
      console.log(seconds);
      console.log(setInterval);
      console.log(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };



  const handleButtonClick = () => {
    setSeconds(10); 
    setIsActive(true);
  };

  return (
    <div>
      <h2>Timer</h2>
      <button onClick={handleButtonClick}> {isActive ? 'Fin du Tour' : 'Start'} </button>
      <p>{formatTime(seconds)}</p>
    </div>
  );
}
