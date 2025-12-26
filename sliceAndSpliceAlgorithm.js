const frankenSplice = (arr1, arr2, index) => {
  const copied = [...arr2];
  for(let i=arr1.length-1; i>=0; i--){
    const spliced = copied.splice(index, 0, arr1[i]);
  }
  return copied
}