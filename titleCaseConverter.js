const titleCase = (str) => {
  const newArr = [];
  const splitted = str.split(" ");
  for (let i = 0; i < splitted.length; i++) {
    newArr.push(splitted[i][0].toUpperCase());
    if (splitted[i].length === 1 && i !== splitted.length - 1) {
      newArr.push(" ");
    }
    for (let j = 1; j < splitted[i].length; j++) {
      newArr.push(splitted[i][j].toLowerCase());
      if (j === splitted[i].length - 1 && i !== splitted.length - 1) {
        newArr.push(" ");
      }
    }
  }
};
