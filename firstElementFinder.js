const findElement = (arr, func) => {
  for (let i = 0; i < arr.length; i++){
    if(func(arr[i])){
      return arr[i]
    }
  }
}
const test = findElement(["hello", "world", "javascript"], function (str) { return str.length > 5; })
const test2 = findElement([1, 2, 3, 4], function(num) { return num > 2; })
const test3 = findElement(["cat", "dog", "bird"], function(str) { return str.length > 10; })
console.log(test)
console.log(test2)
console.log(test3)