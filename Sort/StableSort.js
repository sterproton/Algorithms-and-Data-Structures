/**
 * Stable Sort
 * Let's arrange a deck of cards. There are totally 36 cards of 4 suits(S, H, C, D) and 9 values (1, 2, ... 9). 
 * For example, 'eight of heart' is represented by H8 and 'one of diamonds' is represented by D1.
 */

 /**
  * Your task is to write a program which sorts a given set of cards in ascending order by their values using the Bubble Sort algorithms and the Selection Sort algorithm respectively. 
  * These algorithms should be based on the following pseudocode:
  */


const swap=(arr,i,j)=>{
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const BubbleSort = C => {
  for (let i = 0; i < C.length; i++) {
    for (let j = i + 1; j < C.length; j++) {
      if (C[i].value > C[j].value) {
        swap(C,i,j)
      }
    }
  }
  console.log(C)
}

const SelectionSort = C => {
  for (let i = 0; i < C.length; i++) {
    let min = i
    for (let j = i+1; j < C.length; j++) {
      if (C[min].value>C[j].value) {
        min = j
      }
    }
    swap(C,i,min)
  }
  console.log(C)
}

const C = [
  {
    suit:'H',
    value:4
  },{
    suit:'C',
    value:9
  },{
    suit:'S',
    value:4
  },{
    suit:'D',
    value:2
  },{
    suit:'C',
    value:3
  },
]
const C2 = [...C]
BubbleSort(C)
SelectionSort(C2)

/**
 * D2 C3 H4 S4 C9
  Stable
  D2 C3 S4 H4 C9
  Not stable
 */

 //选择排序会改变相等值的次序