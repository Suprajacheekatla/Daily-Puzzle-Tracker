import React, { useEffect, useState } from "react";
import { generateYearDays, generateMonthLabels } from "../utils/dateUtils";
import { getAllActivity } from "../db/activityDB";

const Heatmap = () => {

  const days = generateYearDays();
  const months = generateMonthLabels();

  const [activity, setActivity] = useState({});

  // Load activity from IndexedDB
  useEffect(() => {

    async function loadActivity() {

      const data = await getAllActivity();

      const map = {};
      data.forEach((item) => {
        map[item.date] = item;
      });

      setActivity(map);
    }

    loadActivity();

    const interval = setInterval(loadActivity, 2000);

    return () => clearInterval(interval);

  }, []);

  function getColor(day) {

    const entry = activity[day];

    if (!entry) return "#F6F5F5";

    const score = entry.score || 0;

    if (score >= 90) return "#190482";
    if (score >= 70) return "#525CEB";
    if (score >= 50) return "#C2D9FF";

    return "#DDF2FD";
  }

  function getTooltip(day) {

    const entry = activity[day];

    if (!entry) return `${day} — No activity`;

    return `${day} — Score: ${entry.score}`;
  }

  return (
    <div>

      <h2>Daily Puzzle Heatmap</h2>

      {/* Month Labels */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          fontSize: "12px",
          marginBottom: "6px"
        }}
      >
        {months.map((month, index) => (
          <div key={index}>{month}</div>
        ))}
      </div>

      {/* Heatmap Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: "repeat(7, 16px)",
          gridAutoFlow: "column",
          gap: "4px",
          marginTop: "10px"
        }}
      >

        {days.map((day, index) => (

          <div
            key={index}
            title={getTooltip(day)}
            style={{
              width: "16px",
              height: "16px",
              background: getColor(day),
              borderRadius: "3px",
              border: "1px solid #eee"
            }}
          />

        ))}

      </div>

    </div>
  );
};

export default Heatmap;