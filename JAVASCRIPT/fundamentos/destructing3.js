function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min;

    return Math.floor(valor);

}

const obj = { max: 50, min: 40 }; //gera numeros entre 40 e 50
console.log(rand(obj));

console.log(rand({ min: 955 })); //de 955 pra cima

console.log(rand({}));