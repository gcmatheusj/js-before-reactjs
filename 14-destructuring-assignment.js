/**
 * Destructuring Assignment é uma conceito do JavaScript que nos possibilita 
 * extrair dados de Objetos e Arrays, atribuindo esses dados a novas variáveis.
 */

// Object
const usuario = {
  id: 1,
  nome: 'Matheus',
  email: 'matheus@email.com',
  idade: 26
}

const { nome } = usuario

console.log(nome)
console.log(usuario)

// Array
const numeros = [1, 2, 3, 4]
const [um, ...restoDosNumeros] = numeros

console.log(restoDosNumeros)