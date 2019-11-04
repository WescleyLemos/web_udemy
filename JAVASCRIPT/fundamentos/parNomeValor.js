//par nome/valor
const saudacao = "Opa"; //contexto léxico1

function exec()
{
    const saudacao = "faalaa" //contexto lexico 2
    return saudacao
}

// Objetos são grupos ainhados de pares nome/valor
const cliente =
{
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: 
    {
        logadouro: "Rua muito legal",
        numero: 123
    }

}

console.log(saudacao);
console.log(exec());
console.log(cliente);