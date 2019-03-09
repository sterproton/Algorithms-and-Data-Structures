const BubbleSort = (arr,compareFunc) => {
  for(let i = 0; i<arr.length;i++){
    for (let j = i+1; j < arr.length; j++) {
       if (compareFunc(arr[i],arr[j]) === 1) {
         const temp = arr[j]
         arr[j] = arr[i]
         arr[i] = temp
       }
    }
    console.log(arr)
  }
}