# Daily Puzzle Tracker

A **React-based web application** that generates a daily puzzle and tracks user activity using a **GitHub-style heatmap visualization**.
The app stores puzzle completion data locally using **IndexedDB**, allowing users to track their daily progress and maintain solving streaks.

---

## 🚀 Features

* 🧩 **Daily Puzzle Generation**

  * A new puzzle is generated each day based on the current date.

* ✅ **Answer Validation**

  * Users can submit answers and receive instant feedback.

* 🔒 **One Attempt per Day**

  * Once solved, the puzzle cannot be solved again for that day.

* 📊 **Activity Heatmap**

  * A GitHub-style heatmap displays daily puzzle activity.

* 🔥 **Streak Tracking**

  * Tracks both **current streak** and **best streak** of solved puzzles.

* 💾 **Local Data Storage**

  * Uses **IndexedDB** to persist activity even after refreshing the page.

* 🎨 **Score-Based Color Intensity**

  * Heatmap colors vary based on puzzle score.

---

## 🛠️ Tech Stack

* **React** – UI development
* **JavaScript (ES6+)**
* **IndexedDB** – Local database for storing puzzle activity
* **CSS** – Styling and layout
* **Vite** – Fast development environment

---

## 📂 Project Structure

```
daily-puzzle-tracker
│
├── src
│   ├── assets
│   │   └── react.svg
│   │
│   ├── components
│   │   ├── Heatmap.jsx
│   │   ├── Streak.jsx
│   │   └── TestPuzzle.jsx
│   │
│   ├── db
│   │   └── activityDB.js
│   │
│   ├── utils
│   │   ├── dateUtils.js
│   │   ├── puzzleGenerator.js
│   │   └── streakUtils.js
│   │
│   ├── styles
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

Clone the repository:

```
git clone https://github.com/yourusername/daily-puzzle-tracker.git
```

Navigate to the project directory:

```
cd daily-puzzle-tracker
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 📈 How It Works

1. Each day a puzzle is generated using the current date.
2. The user submits an answer to solve the puzzle.
3. Puzzle completion data is stored in **IndexedDB**.
4. The heatmap visualizes daily puzzle activity.
5. Streak calculations determine the **current and best streak**.

---

## 🎯 Future Improvements

* Add **multiple puzzle types**
* Add **difficulty levels**
* Add **cloud storage support**
* Add **user accounts**
* Add **statistics dashboard**

---

## 📸 Screenshot

Add a screenshot of the application here.

Example:

```
![App Screenshot](screenshot.png)
```

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

Developed as a React project to demonstrate:

* React component architecture
* IndexedDB usage
* Data visualization
* Streak tracking algorithms
