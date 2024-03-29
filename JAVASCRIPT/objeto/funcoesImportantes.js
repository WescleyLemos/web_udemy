const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //chaves
console.log(Object.values(pessoa)) //valores
console.log(Object.entries(pessoa)) //chave e valores


Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false, //não permitir reescrita
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' //tentando reescrever na propriedade
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015) concatena apoz definição do objeto destino 
//os outros objetos que forem setados
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(dest)