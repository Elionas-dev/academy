var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split('\n');

let segundos = parseInt(linhas);

const valores = [3600, 60, 1];
const tempoFinal = [];

for(let valor of valores) {
    tempoFinal.push(parseInt(segundos / valor));
    segundos = segundos % valor;
}

console.log(`${tempoFinal.join(':')}`);