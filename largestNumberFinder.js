const largestOfAll = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const largeNumber = Math.max(...arr[i]);
      if (!newArr.includes(largeNumber)) {
        newArr.push(largeNumber);
      }
    }
  }
  return newArr;
};
const arr = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
const test = largestOfAll(arr)
console.log(test)