/**
 * Optional Chaining é um operador (?.) que permite acessar atributos de objetos e caso
 * esse atributo tenha valor null ou undefined o operador retornará undefined/null 
 * em vez de lançar um erro.
 */

const usuario = {
  id: 1,
  nome: 'Matheus',
  email: 'matheus@email.com',
  endereco: {
    rua: 'Rua do programador'
  }
}

console.log(usuario.endereco?.rua)