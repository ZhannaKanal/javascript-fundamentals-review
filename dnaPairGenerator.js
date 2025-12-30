const pairElement = (string) => {
  const splitted = string.split("");
  const newArr = [];
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] === "A") {
      newArr.push(["A", "T"]);
    } else if (splitted[i] === "T") {
      newArr.push(["T", "A"]);
    } else if (splitted[i] === "C") {
      newArr.push(["C", "G"]);
    } else if (splitted[i] === "G") {
      newArr.push(["G", "C"]);
    }
  }
  return newArr;
};
console.log(pairElement("ATCG"));
console.log(pairElement("CTCTA"));
