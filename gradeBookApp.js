const getAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum / arr.length;
};
const getGrade = (score) => {
    if (score === 100) return "A+";
    else if (score >= 90) return "A";
};
const hasPassingGrade = (score) => {};
const studentMsg = (arrayOfScores, studentScore) => {};
