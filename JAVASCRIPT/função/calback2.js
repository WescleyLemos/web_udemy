const notas = [7, 6, 5, 4, 3, 2, 1]

//Extrair menor q 6 sem usar callback
let notasbaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasbaixas.push(notas[i])
    }
}

console.log(notasbaixas)

//com Calback
const notasbaixas2 = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasbaixas2)


const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)