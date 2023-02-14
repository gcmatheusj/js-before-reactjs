/**
 * O operador ternario serve como forma de simplificarmos o uso do if...else.
 * 
 * Ele recebe uma condição que é avaliada como true ou false. Se a condicao for 
 * true ela retorna a segunda parte do ternario, senão ele retorna sua terceira parte.
 */


// Exemplo
function alunoAprovado (nota) {
  return nota >= 7 ? 'aprovado' : 'reprovado'
}

console.log(alunoAprovado(6))