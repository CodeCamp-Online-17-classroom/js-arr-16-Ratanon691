function convertToCamelCase(text){
  let arr = Array.from(text)
  for(i = 0 ; i < arr.length ; i++){
    if(arr[i] == `-`){
      arr.splice(i,1)
      arr[i] = arr[i].toUpperCase()
    }
  }
  return arr.join(``)
}
const dashedText = "background-color";
console.log(convertToCamelCase(dashedText)); // "backgroundColor"
