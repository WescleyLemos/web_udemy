const valores = [7.7,8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);//retorna indefinido

valores[4] = 10;
console.log(valores.length); //quantos elementos tem no array

valores.push({d:3}, false, null, "teste"); // colocar mais elementos de tipos diferentes em um array
console.log(valores);

console.log(valores.pop()); // imprime o ultimo valor e deleta logo apos
delete valores[1];// deleta item na posição escolhida do array
console.log(valores);

console.log(typeof valores);
