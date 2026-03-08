export function generatePuzzle(date) {

  const seed = new Date(date).getDate();

  const puzzles = [
    { question: "2 + 3", answer: 5 },
    { question: "7 - 4", answer: 3 },
    { question: "5 + 6", answer: 11 },
    { question: "9 - 3", answer: 6 },
    { question: "4 * 2", answer: 8 },
    { question: "10 / 2", answer: 5 },
    { question: "6 + 7", answer: 13 },
  ];

  return puzzles[seed % puzzles.length];
}