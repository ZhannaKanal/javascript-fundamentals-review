const sumFibs = (number) => {
  let prev = 1;
  let curr = 1;
  let sum = 1;
  while (curr <= number) {
    if (curr % 2 !== 0) {
      sum += curr;
    }
    [prev, curr] = [curr, prev + curr];
  }
  return sum;
};
console.log(sumFibs(4))
console.log(sumFibs(75025))