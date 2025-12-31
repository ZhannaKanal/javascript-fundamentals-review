const dropElements = (arr, func)=> {
  let newArr = []
  for(let i =0; i<arr.length; i++){
    if(func(arr[i])){
        const newArr = arr.slice(i);
        return newArr;
    }
  }
  return newArr
}
console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }))
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))