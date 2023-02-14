/**
 * No JavaScript temos 3 operadores lógicos:
 * 
 * ! - Operador de Negação (NOT)
 * && - Operador E (AND)
 * || - Operador OU (OR)
 */

// Operador de Negação
const eleEProgramador = true

console.log(!eleEProgramador)

const nome = null

console.log(!nome) // false

//Operador E (AND)

const a = true
const b = true
const c = false
const d = true

console.log(a && b && c && d)

// Operador Ou (OR)

const e = false
const f = false
const g = false
const h = false

console.log(e || f || g || h)

const x = true;
const y = false;
const j = true;

console.log((x && y) || !j)
