const valores = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
}

const valorTotal = Object.values(valores).reduce(
  (total, valor) => total + valor
)
console.log(valorTotal)

for (const valor in valores) {
  const porcentual = ((valores[valor] / valorTotal) * 100).toFixed(0)
  alert(`${valor} - ${porcentual}%`)
}
