/**
 * Promise no JavaScript é considerado um proxy para um valor futuro, ou seja, 
 * quando executamos uma operação assíncrona no formato de promise não sabemos 
 * imediatamente o retorno daquela operação, o JavaScript simplesmente "promete" 
 * que irá nos retornar uma operação bem sucedida ou não.
 */

// Programação Sincrona
console.log('Programação Sincrona')
console.log(1)
console.log(2)
console.log(3)

// Programação Assincrona
console.log('Programação Assincrona')
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)


// Promise 
const usuarios = [
  {
    id: 1,
    nome: 'Matheus',
    email: 'matheus@gmail.com'
  },
  {
    id: 2,
    nome: 'Danilo',
    email: 'danilo@gmail.com'
  },
  {
    id: 3,
    nome: 'Michel',
    email: 'michel@gmail.com'
  },
  {
    id: 4,
    nome: 'Gustavo',
    email: 'gustavo@gmail.com'
  },
  {
    id: 5,
    nome: 'Islan',
    email: 'islan@gmail.com'
  },
]

const buscarUsuarioPeloNomeDb = (nome) => {
  return new Promise((resolve, reject) => {
    const usuario = usuarios.find(usuario => usuario.nome === nome)

    if (!usuario) {
      reject('Usuário não foi encontrado')
    }

    resolve(usuario)
  })
}

buscarUsuarioPeloNomeDb('Matheus')
  .then(usuario => console.log(usuario))
  .catch(error => console.error(error))
