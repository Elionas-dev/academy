var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split('\n');

let valor = parseFloat(linhas);

const notas = [100, 50, 20, 10, 5, 2];

console.log(`NOTAS:`);

for(let nota of notas){
    let calculo = parseFloat(valor / nota);
    console.log(`${parseInt(calculo)} nota(s) de R$ ${nota.toFixed(2)}`);
    valor = valor % nota ;
}

const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]; 

console.log(`MOEDAS:`)
for(let moeda of moedas){
    let calculo = parseFloat(valor / moeda);
    console.log(`${parseInt(calculo)} moeda(s) de R$ ${moeda.toFixed(2)}`);
    valor = valor % moeda + 0.00001;
}

