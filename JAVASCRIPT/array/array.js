console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo' //add 
aprovados.push('Abia')

console.log(aprovados.length)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)
aprovados.splice(1, 2, 'elemento1') // incluir e excluir a partir de um indice