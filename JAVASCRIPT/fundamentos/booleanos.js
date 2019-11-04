let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log("os verdadeiros...")
console.log(!!3); //inteiro positivo
console.log(!!-3); //inteiro negativo
console.log(!!" ");//string preenchida
console.log(!![]);//vetor
console.log(!!{});//
console.log(!!Infinity);//numeros infinitos
console.log(!!(isAtivo=Infinity));

console.log("os falsos...");
console.log(!!0);// zero
console.log(!!"");//string vazia
console.log(!!null);// nulo
console.log(!!NaN); //não é um numero
console.log(!!undefined);//indefinido
console.log(!!(isAtivo=false));

console.log("finalizando...operadores lógicos");
console.log((""|| null||0||"epa "));// so retorna o que for verdadeiro

let nome = "";

console.log(nome || "desconhecido");// imprime desconhecido se o nome for vazio