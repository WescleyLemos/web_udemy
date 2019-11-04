// pessoa -> 123 -> {...} 
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 {...} -> {...} 
// pessoa = { nome: 'Ana' } 

Object.freeze(pessoa) //congela objeto para n mexer mais
pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)