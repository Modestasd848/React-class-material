import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Controls from './components/Controls/Controls';
import Display from './components/Display/Display';

export const TimeContext = React.createContext();

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef();

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [isRunning]);

  return (
    <div>
      <TimeContext.Provider value={{ time, setIsRunning, setTime }}>
        <Display />
        <Controls />
      </TimeContext.Provider>
    </div>
  );
}

export default App;
