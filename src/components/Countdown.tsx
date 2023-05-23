import React, { useState, useEffect } from "react";
import styles from "@/styles/Countdown.module.scss";

const Countdown = () => {
  const [days, setDays] = useState<any>(0);
  const [hours, setHours] = useState<any>(0);
  const [minutes, setMinutes] = useState<any>(0);
  const [seconds, setSeconds] = useState<any>(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate: any = new Date("June 5, 2023 00:00:00");
      const now: any = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const formattedDays = days > 10 ? days.toString() : `0${days}`;
        const formattedHours = hours > 10 ? hours.toString() : `0${hours}`;
        const formattedMinutes =
          minutes > 10 ? minutes.toString() : `0${minutes}`;
        const formattedSeconds =
          seconds > 10 ? seconds.toString() : `0${seconds}`;

        setDays(formattedDays);
        setHours(formattedHours);
        setMinutes(formattedMinutes);
        setSeconds(formattedSeconds);
      }
    };

    calculateTimeLeft();

    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div id="countdown">
        <ul>
          <li>
            <span id="days">{days}</span>
            Days
          </li>
          <li>
            <span id="hours">{hours}</span>
            Hours
          </li>
          <li>
            <span id="minutes">{minutes}</span>
            Minutes
          </li>
          <li>
            <span id="seconds">{seconds}</span>
            Seconds
          </li>
        </ul>
      </div>
      <div id="content" className={styles.emoji}>
        <span>🥳</span>
        <span>🎉</span>
        <span>🎂</span>
      </div>
    </div>
  );
};

export default Countdown;
