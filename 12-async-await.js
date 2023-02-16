/**
 * Async/Await é considerado um açúcar sintático em volta de uma promise, ou seja,
 * com a utilização da palavra reservada await dentro de um função async nosso
 * código assíncrono pode ser estruturado e lido de forma síncrona, facilitando
 * a leitura do código. Outro ponto que precisa ser mencionado é que uma função
 * escrita como async também irá retornar uma promise e nesse caso, ela terá
 * todas as características de uma promise mencionadas acima.
 */

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

const soma = (a, b) => {
  return a + b
}

const run = async () => {
  try {
    const usuario = await buscarUsuarioPeloNomeDb('alshdajks')
    const resultadoDaSoma = soma(1, 2)
    console.log(usuario)
  } catch (error) {
    console.log(error)
  }
}

run()