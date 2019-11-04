// coleçao dinâmica de pares chave-valor
const produto = new Object
produto.nome = 'cadeira'

produto['marca do produto'] = 'genérica' //identificar e adicionar 
produto.preco = 220
console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 890000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logadouro: 'Rua abc',
            numero: 123
        }
    },

    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        //...

    }
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logadouro'] = 'Av Gigante'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)