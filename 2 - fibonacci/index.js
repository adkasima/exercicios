function fibonacci(num) {
  let a = 0
  let b = 1
  let temp

  while (num >= a) {
    if (num === b) {
      return true
    }

    temp = b
    b = a + b
    a = temp
  }

  return false
}

const num = Number(prompt("Digite um número: "))
const pertence = fibonacci(num)

pertence
  ? alert(`${num} Pertence à sequência de Fibonacci.`)
  : alert(`${num} Não pertence à sequência de Fibonacci.`)
