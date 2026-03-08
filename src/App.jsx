import TestPuzzle from "./components/TestPuzzle";
import Heatmap from "./components/Heatmap";
import Streak from "./components/Streak";

function App() {

  return (

    <div style={{ padding: "20px" }}>

      <h1>Daily Puzzle Tracker</h1>

      <TestPuzzle />

      <Streak />

      <Heatmap />

    </div>
  );
}

export default App;