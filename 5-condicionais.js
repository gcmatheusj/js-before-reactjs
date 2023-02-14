/**
 * No JavaScript ou em qualquer outra linguagem de programação existem
 * estruturas condicionais que nada mais são do que um meio para tomada de
 * decisão durante a execução do código.
 * 
 * Com as estruturas condicionais podemos direcionar a execução de um 
 * determinado bloco de código em detrimento de outro, dado uma condição.
 * 
 * if...else
 * else if
 * switch
 */

// if...else
function alunoAprovado (nota) {
  if (nota >= 7) {
    return 'aprovado'
  } else {
    return 'reprovado'
  }
}

//console.log(alunoAprovado(6))

// else if
function nivelDoAluno (nota) {
  if (nota > 7) {
    return 'excelente'
  } else if (nota === 7) {
    return 'bom'
  } else {
    return 'ruim'
  }
}

//console.log(nivelDoAluno(6))

// switch
function diaDaSemana () {
  switch (new Date().getDay()) {
    case 0:
      console.log("Domingo")
      break
    case 1:
      console.log("Segunda")
      break
    case 2:
       console.log("Terça")
      break
    case 3:
      console.log("Quarta")
      break
    case 4:
      console.log("Quinta")
      break
    case 5:
      console.log("Sexta")
      break
    case 6:
      console.log("Sabado")
    default:
      return
  }
}

console.log(diaDaSemana())