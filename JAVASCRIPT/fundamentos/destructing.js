// novo recurso dp ES2015

const pessoa =
{
    nome: "ana",
    idade:5,
    endereco:
    {
        logadouro: "Rua A",
        numero: 1000
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade);

const {nome: n , idade: i} = pessoa;
console.log(n,i);

const {endereco:{logadouro, numero}} = pessoa;
console.log(logadouro,numero);