import { useState, useEffect } from "react";
import { saveActivity, getAllActivity } from "../db/activityDB";
import { generatePuzzle } from "../utils/puzzleGenerator";

const TestPuzzle = () => {

  const today = new Date().toISOString().split("T")[0];

  const [puzzle] = useState(() => generatePuzzle(today));
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [solved, setSolved] = useState(false);

  // Check if today's puzzle already solved
  useEffect(() => {

    async function checkTodayActivity() {

      const data = await getAllActivity();

      const todayEntry = data.find((item) => item.date === today);

      if (todayEntry) {
        setSolved(true);
        setMessage("✅ You already solved today's puzzle!");
      }

    }

    checkTodayActivity();

  }, [today]);

  const checkAnswer = async () => {

    if (solved) return;

    if (Number(answer) === Number(puzzle.answer)) {

      await saveActivity({
        date: today,
        solved: true,
        score: 100
      });

      setSolved(true);
      setMessage("✅ Correct! Puzzle solved.");
      setAnswer("");

      // trigger heatmap refresh
      window.dispatchEvent(new Event("activityUpdated"));

    } else {

      setMessage("❌ Wrong answer. Try again.");

    }
  };

  return (
    <div>

      <h3>Today's Puzzle</h3>

      <p>{puzzle.question} = ?</p>

      <input
        type="number"
        value={answer}
        disabled={solved}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button
        onClick={checkAnswer}
        disabled={solved}
      >
        Submit
      </button>

      <p>{message}</p>

    </div>
  );
};

export default TestPuzzle;