const uniteUnique = (...args) => {
  const newArr = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!newArr.includes(args[i][j])) {
        newArr.push(args[i][j]);
      }
    }
  }
  return newArr;
};
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
