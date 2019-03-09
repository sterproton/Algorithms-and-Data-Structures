
//For integers x and y, if x ≥ y, then gcd(x, y) = gcd(y, x%y)


const gcd = (x,y) => {
  if (x===0) {
    return y
  }
  if (y === 0) {
    return x
  }
  if (x>=y) {
    return gcd(y,x%y)
  } else{
    return gcd(x,y%x)
  }
}

console.log(gcd(54,20))
console.log(gcd(147,105))