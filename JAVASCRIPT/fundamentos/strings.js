const escola = "Carambolas";

console.log(escola.charAt(4)); //IMPRIME LETRA NA POSIÇÃO SETADA
console.log(escola.charCodeAt(3)); // IMPRIME NUMERO DA LETRA NA TABELA UNICODE
console.log(escola.substring(1)); // IMPRIME PALAVRA A PARTIR DO NUMERO DA LETRA SETADA
console.log(escola.substring(1,7)); // IMPRIME PALAVRA A PARTIR DO NUMERO DA LETRA SETADA E FINALIZARANTES DO NUMERO SETADO
console.log('Caramboletas '.concat(escola).concat("!")+ escola); //CONCATENAR
console.log("2"+2);

console.log(escola.replace("l","4" )); // SUBSTITIU A LETRA POR OUTRA ESCOLHIDA (usar expressão regular se quiser tudo)

console.log("Ana,Maria,Pedro".split(','));// GERAR ARRAY (obs.escolher separado na função)

