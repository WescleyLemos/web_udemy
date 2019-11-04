const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: false })

console.log(tecnologias.get('react').framework)


const chavesVariadas = new Map([
    function() {}, 'Função', [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has())
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)