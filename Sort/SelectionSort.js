const swap=(arr,i,j)=>{
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
const SelectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i+1; j < arr.length; j++) {
      if (arr[min]>arr[j]) {
        min = j
      }
    }
    swap(arr,i,min)
    console.log(arr)
  }
}
