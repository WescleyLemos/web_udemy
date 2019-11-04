//Armazenando uma função em uma variavel
const imprimirSoma = function (a,b)
{
    console.log (a+b)
}

imprimirSoma (2,3);

// Armazenando uma função arrow em uma variável
const soma = (a,b) =>
{
    return a+b
}

console.log(soma(3,3));

const subtracao = (a,b) => a-b; //retorno implicito

console.log(subtracao(2,1));