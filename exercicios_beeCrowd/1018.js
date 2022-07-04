var input = require('fs').readFileSync('./dev/stdin', 'utf8');

var valor = parseInt(input);

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(`${valor}`)

for(let nota of notas){
    let calculo = parseInt(valor / nota);
    console.log(`${calculo} nota(s) de R$ ${nota},00`);
    valor = valor % nota ;
}

// var calculo = parseInt(valor / 100);
// console.log(`${calculo} nota(s) de R$ ${100},00`);
// valor = valor % 100 ;

// calculo = parseInt(valor / 50)
// console.log(`${calculo} nota(s) de R$ ${50},00`);
// valor = valor % 50 ;

// calculo = parseInt(valor / 20)
// console.log(`${calculo} nota(s) de R$ ${20},00`);
// valor = valor % 20 ;

// calculo = parseInt(valor / 10)
// console.log(`${calculo} nota(s) de R$ ${10},00`);
// valor = valor % 10 ;

// calculo = parseInt(valor / 5)
// console.log(`${calculo} nota(s) de R$ ${5},00`);
// valor = valor % 5 ;

// calculo = parseInt(valor / 2)
// console.log(`${calculo} nota(s) de R$ ${2},00`);
// valor = valor % 2 ;

// calculo = parseInt(valor / 1)
// console.log(`${calculo} nota(s) de R$ ${1},00`);
// valor = valor % 1 ;
