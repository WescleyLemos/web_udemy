// forma literal
function fun1() {}


// armazenar em uma variável
const fun2 = function() {}

// em array 
const array = [function(a, b) { return a + b }]
console.log(array[0](2, 3))

// em um atributo de objeto 
const obj = {}
obj.falar = function() { return 'Opa' }
console.log(obj.falar())


// passar função como parametro 
function run(fun) {
    fun()
}


// pode retornaar e conter uma função 
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)