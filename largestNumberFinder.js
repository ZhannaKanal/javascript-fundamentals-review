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
