const pyramid = (strToRepeat, numOfRows, isFalse) => {
  let result = "\n";
  if (!isFalse) {
    for (let i = 0; i < numOfRows; i++) {
      const spaces = " ".repeat(numOfRows - i - 1);
      const repeated = strToRepeat.repeat(2 * i + 1);
      result += spaces + repeated + "\n";
    }
  } else {
    for (let i = 0; i < numOfRows; i++) {
      
    }
  }
  return result;
};
console.log(pyramid("o", 4, true));
