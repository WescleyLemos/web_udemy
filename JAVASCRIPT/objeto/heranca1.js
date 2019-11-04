const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) //qual o prototipo (objeto pai)  de ferrari ? um objeto vazio
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // o pai de ferrari tem um pai? não

function MeuObjeto() {
    console.log(typeof Object, typeof MeuObjeto)
    console.log(typeof Object.prototype, typeof MeuObjeto.prototype)
}
//objeto não tem o atributo prototype, somente presente em funções

MeuObjeto()