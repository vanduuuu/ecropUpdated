import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date(); // Get current date and time
    const now = new Date(); // Current time

    // Set the target time to 11:00 AM today
    targetDate.setHours(11, 0, 0, 0);

    // If the current time is past 11:00 AM, return 0
    if (now > targetDate) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Stop timer
    }

    const difference = targetDate - now; // Time difference in milliseconds

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Stop the timer when countdown reaches zero
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer when unmounting
  }, []);

  return (
    <div className="timer-container">
      <h3>We're <b className="text-dark">Launching</b> Soon...</h3>
      <div className="timee">
        <span>{String(timeLeft.days).padStart(2, "0")} :</span>
        <span>{String(timeLeft.hours).padStart(2, "0")} :</span>
        <span>{String(timeLeft.minutes).padStart(2, "0")} :</span>
        <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
      </div>
      <p className="fs-6">
        &nbsp;Days&nbsp;:&nbsp;&nbsp;Hours&nbsp;&nbsp;:&nbsp;&nbsp;Minutes&nbsp;&nbsp;:&nbsp;&nbsp;Seconds
      </p>
    </div>
  );
};

export default Timer;
