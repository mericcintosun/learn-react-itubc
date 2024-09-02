import { useState, useEffect, useRef } from "react";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliSeconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliSeconds = String(milliSeconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliSeconds}`;
  };

  return (
    <>
      <div id="stopwatch" className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-lg shadow-lg">
        <div id="display" className="text-4xl font-mono mb-4">
          {formatTime()}
        </div>
        <div id="controls" className="space-x-4">
          <button
            id="start-button"
            onClick={start}
            className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Start
          </button>
          <button
            id="stop-button"
            onClick={stop}
            className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Stop
          </button>
          <button
            id="reset-button"
            onClick={reset}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default StopWatch;
