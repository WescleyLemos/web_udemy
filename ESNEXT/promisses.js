function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //aceita somente um par^metro
        }, segundos * 1000)

    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))