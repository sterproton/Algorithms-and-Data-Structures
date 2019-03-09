const readLine = require('readline')

const rl = readLine.createInterface({
  input:process.stdin,
  output:process.stdout
})

function print(data){
  process.stdout.write(data+'\n')
}

rl.on('line', (line) => {
  print(line)
})