import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours > 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(meridiem)}`
  };

  const padZero = (number) => {
        return (number < 10 ? "0" : "") + number;
  }

  return (
    <>
      <div className="" id="body">
        <div className="backdrop-sepia-0" id="clock-container">
          <div className="text-8xl font-bold shadow-amber-300" id="clock">
            <span className="">{formatTime()}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalClock;
