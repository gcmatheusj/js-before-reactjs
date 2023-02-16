/**
 * Nullish coalescing (??) é um operador lógico que retorna o operando do lado
 * direito se o valor do lado esquerdo é null ou undefined, caso contrário o
 * operando do lado esquerdo é retornado. Valores falsy são ignorados na verificação.
 */

const a = null
const b = 20
const c = 0

const d = a ?? b
const e = c || b
console.log(d) // 20
console.log(e) // 20