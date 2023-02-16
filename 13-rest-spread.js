/**
 * O operador (...) no JavaScript é utilizado em dois conceitos distintos: Rest e Spread.
 * 
 * Rest: coleta multiplos elementos e os agrupam em um único elemento (array).
 * 
 * Spread: faz o oposto do Rest, ele espalha um valor iterável (array, object, 
 * strings) em uma lista de argumentos.
 */

// Rest
function euNaoSeiQuantosParamEuTenho (...params) {
  params.map(param => console.log(param))
}

const usuario = {
  id: 1,
  nome: 'Matheus',
  email: 'matheus@email.com',
  idade: 26
}

// Rest
const { nome, ...asdasdasdasdd } = usuario

const usuario2 = {
  genero: 'Masculino',
  profissao: 'Programado',
  ...usuario
}

console.log(usuario2)

// console.log(id)
// console.log(restanteDosAtributos)

// euNaoSeiQuantosParamEuTenho('a', 3)

// const numeros = [1, 2, 3]

// const a = 1
// const b = 2
// const c = 3
// console.log(...numeros)