const pairElement = string => {
  const splitted = string.split("");
  const newArr = []
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] === "A") {
      newArr.push(["A", "T"])
    }else if(splitted[i] === "T"){

    }
  }
  return newArr
}