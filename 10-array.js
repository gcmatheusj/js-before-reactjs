/**
 * Arrays no JavaScript são objetos capazes de armazenar listas e essas listas 
 * podem ser formadas de tipos primitivos (number, string, boolean), objetos e 
 * até mesmo outros arrays. No JavaScript os Arrays vêm com uma série de 
 * métodos que podem ser usados para interagir com a lista em si (map, filter, 
 * find, reduce, indexOf, pop, push, dentre outros). 
 * 
 * Todo e qualquer array começa a partir do index 0 isso quer dizer que o 
 * primeiro item dentro de um array está na posição 0.
 */


//Index:         0,          1,          2
const frutas = ['morango', 'melancia', 'banana']
const numeros = [1, 2, 3, 4]

console.log(frutas)

/**
 * Quando eu quero acessar os itens de um array, utiliza-se [] e dentro dos 
 * colchetes eu informo o index que eu quero acessar.
 */ 
console.log(frutas[0])

/**
 * Quando eu quero acessar os métodos presentes numa variavel do tipo array eu 
 * utilizo o operador (.)
 */
frutas.map((fruta, index, array) => {
  console.log(fruta, index, array)
})

const usuarios = [
  {
    nome: 'Matheus',
    email: 'matheus@email.com'
  }, 
  {
    nome: 'Danilo',
    email: 'danilo@email.com'
  }
]