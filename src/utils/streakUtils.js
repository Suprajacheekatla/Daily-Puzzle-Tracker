export function calculateStreak(activityMap) {

  const dates = Object.keys(activityMap).sort();

  let currentStreak = 0;
  let bestStreak = 0;
  let tempStreak = 0;

  let previousDate = null;

  dates.forEach(date => {

    const entry = activityMap[date];

    if (!entry || !entry.solved) return;

    const currentDate = new Date(date);

    if (!previousDate) {

      tempStreak = 1;

    } else {

      const diff =
        (currentDate - previousDate) / (1000 * 60 * 60 * 24);

      if (diff === 1) {
        tempStreak += 1;
      } else {
        tempStreak = 1;
      }
    }

    if (tempStreak > bestStreak) {
      bestStreak = tempStreak;
    }

    previousDate = currentDate;
  });

  currentStreak = tempStreak;

  return {
    currentStreak,
    bestStreak,
  };
}