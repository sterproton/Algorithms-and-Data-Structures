const isPrime = num => {
  if (num < 2) {
    return false
  }
  let primeFlag = true
  for(let i = Math.floor(Math.sqrt(num));i>=2;i--){
    if (num%i === 0) {
      primeFlag = false
      break
    }
  }
  return primeFlag
}

const getPrimeNumberFromIntegers = arr => arr.filter(isPrime)