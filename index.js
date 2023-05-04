function getDayOfWeek(dateString) {
  const date = new Date(dateString);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}

function generateDictionary(inputDict) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const outputDict = {};

  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    const dayValues = [];

    for (const dateStr in inputDict) {
      if (getDayOfWeek(dateStr) === day) {
        dayValues.push(inputDict[dateStr]);
      }
    }

    if (dayValues.length > 0) {
      outputDict[day] = dayValues.reduce((a, b) => a + b);
    } else {
      const prevDayIndex = i === 0 ? days.length - 1 : i - 1;
      const nextDayIndex = i === days.length - 1 ? 0 : i + 1;
      const prevDay = days[prevDayIndex];
      const nextDay = days[nextDayIndex];
      outputDict[day] =
        (inputDict[prevDay + "day"] + inputDict[nextDay + "day"]) / 2;
    }
  }

  return outputDict;
}

// Example usage
const inputDict = {
  "2020-01-01": 4,
  "2020-01-02": 4,
  "2020-01-03": 6,
  "2020-01-04": 8,
  "2020-01-05": 2,
  "2020-01-06": -6,
  "2020-01-07": 2,
  "2020-01-08": -2,
};

const outputDict = generateDictionary(inputDict);
console.log(outputDict); // { 'Mon': -6, 'Tue': 2, 'Wed': 2, 'Thu': 4, 'Fri': 6, 'Sat': 8, 'Sun': 2 }
