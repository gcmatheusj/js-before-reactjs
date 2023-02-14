/**
 * No JavaScripts temos diversas formas forma de fazermos loop (for) em nosso código.
 * As mais utilizadas são:
 * 
 * map: Retorna um novo array com a mesma quantidade do array base, além de nos possibilitar 
 * manipular cada item do array base.
 * 
 * filter: Retorna um novo array se os itens do array base passarem em determinado teste de condição.
 * 
 * find: Retorna o primeiro item do array que passar numa dada condição.
 * 
 * forEach: Uma alternativa ao tradicional for, ele ira percorrer o array base, 
 * porém sem retornar nada.
 * 
 * reduce: Percorre todo o array e o reduz a um único valor (valor retornado).
 * 
 * pop: Remove o último item de um array e o retorna.
 * 
 * push: Adiciona itens ao final de um array.
 * 
 * splice: Altera um array, inserindo e removendo elementos.
 */

// map
const frutas = ['morango', 'melancia', 'banana']

console.log(frutas)

const frutasMapeadas = frutas.map((fruta) => {
  return fruta.toLocaleUpperCase()
})

console.log(frutasMapeadas)

//filter
const animais = [
  {
    nome: 'Bob',
    tipo: 'cachorro'
  },
  {
    nome: 'Aquiles',
    tipo: 'cachorro'
  },
  {
    nome: 'Apollo',
    tipo: 'cachorro'
  },
  {
    nome: 'Fred',
    tipo: 'gato'
  },
  {
    nome: 'Nina',
    tipo: 'gato'
  },
  {
    nome: 'Marley',
    tipo: 'papagaio'
  },
]

console.log(animais)

// Tamanho do array animais
console.log(animais.length)

// Filtra os animais do tipo gato
const gatos = animais.filter((animal) => animal.tipo === 'gato')

console.log(gatos)

// Encontra o primeiro animal com o nome Apollo e retorna
const apollo = animais.find((animal) => animal.nome === 'Apollo')

console.log(apollo)


//forEach
for (let i = 0; i < animais.length; i++) {
  console.log(animais[i])
}

// Irá apenas percorrer o array sem retorna-lo
const animais2 = animais.forEach((animal) => {
  if (animal.tipo !== 'cachorro'){
    console.log('Animal invalido')
  }
})

console.log(animais2)

// Reduce
const comanda = [
  {
    nome: 'Suco sem Açucar',
    tipo: 'bebida',
    valor: 10,
  },
  {
    nome: 'Frango com Batata Doce',
    tipo: 'comida',
    valor: 12
  },
  {
    nome: 'Pudim Proteico',
    tipo: 'comida',
    valor: 8
  }
]

const valorTotal = comanda.reduce((acumulador, item) => {
  if (item.tipo === 'comida') {
    return acumulador += item.valor
  }

  return acumulador
}, 0)

console.log(valorTotal)

// pop
const itemRemovido1 = comanda.pop()

console.log('Item Removido:', itemRemovido1)

const itemRemovido2 = comanda.pop()

console.log('Item Removido:', itemRemovido2)

console.log(comanda)

//push
const length = comanda.push({
  nome: 'Agua Sem Gas',
  tipo: 'bebida',
  valor: 2
})

console.log(length)
console.log(comanda)

//splice
console.log(comanda)

comanda.splice(1, 1, {
  nome: 'Agua Sem Gas',
  tipo: 'bebida',
  valor: 2
})

console.log(comanda)

const meses = ['janeiro', 'fevereiro', 'segunda', 'terca']
meses.splice(2, 2, 'março', 'abril')
console.log(meses)
