function compras(trabalho1, trabalho2) {
    const comprarSortvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //artifício para usar o xor (dosjunção exclusiva / ou...ou)
    const comprarTv32 = trabalho1 != trabalho2; // também é um ou exclusivo
    const manterSaudavel = !comprarSortvete; //operador unário

    return { comprarSortvete, comprarTv50, comprarTv32, manterSaudavel };

}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));