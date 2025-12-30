const sumAll = (arr) => {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);
  let sum = 0;
  for (let i = minValue; i < maxValue + 1; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
