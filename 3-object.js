/**
 * O tipo object representa um dos tipos de dados do JavaScript. Ele é usado 
 * para armazenar várias coleções de chaves e valores. Os valores neste caso, 
 * podem ser constituídos de qualquer tipo primitivo do JavaScript (number, 
 * string, boolean), assim como também podem ser formados por outros objetos 
 * e até mesmo arrays e funções.
 */

const usuario = {
  nome: 'Matheus Castro',
  email: 'matheus@email.com',
  idade: 26,
  endereco: {
    rua: 'Rua do programador',
    numero: 240,
  },
  estaProgramando: true,
  programar: function () {
    console.log(`${usuario.nome} está programando.`)
  },
  linguagensProgramacao: ['js', 'java', 'c'],
  'linguagens-de-programacao': ['js', 'java', 'c']
}

console.log(usuario['linguagens-de-programacao'][1])

