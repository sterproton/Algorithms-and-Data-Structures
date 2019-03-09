const swap = (arr,i,j) => {
  const temp = ar[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const ShellSort = (arr) => {
  for(let gap = Math.floor(arr.length/2);gap>=1;gap = Math.floor(gap/2)){
    for(let i = gap;i<arr.length;i+=gap){
      let j = i - gap
      const key = arr[i]
      while (key<arr[j]&&j>=0) {
        arr[j+gap] = arr[j]
        j-=gap
      }
      arr[j+gap] = key
    }
  }
  return arr
}

//https://www.youtube.com/watch?v=SCBf7aqKQEY