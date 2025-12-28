const titleCase = str => {
  const newArr = []
  const splitted = str.split(" ");
  for (let i = 0; i < splitted.length; i++) {
    newArr.push(splitted[i][0].toUpperCase());
  }
}