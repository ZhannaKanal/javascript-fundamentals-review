const getAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum / arr.length;
};
const getGrade = (score) => {
  if (score === 100) return "A+";
  else if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
};
const hasPassingGrade = (score) => {
    let grade;
};
const studentMsg = (arrayOfScores, studentScore) => {};
