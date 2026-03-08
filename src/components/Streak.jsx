import React, { useEffect, useState } from "react";
import { getAllActivity } from "../db/activityDB";
import { calculateStreak } from "../utils/streakUtils";

const Streak = () => {

  const [streak, setStreak] = useState({
    currentStreak: 0,
    bestStreak: 0
  });

  useEffect(() => {

    async function loadStreak() {

      const data = await getAllActivity();

      const map = {};
      data.forEach(item => {
        map[item.date] = item;
      });

      const result = calculateStreak(map);

      setStreak(result);
    }

    loadStreak();

  }, []);

  return (

    <div style={{ marginTop: "20px" }}>

      <h2>🔥 Streak Stats</h2>

      <p>🔥 Current Streak: {streak.currentStreak} days</p>

      <p>🏆 Best Streak: {streak.bestStreak} days</p>

    </div>

  );
};

export default Streak;