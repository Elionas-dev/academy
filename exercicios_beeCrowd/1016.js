var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split('\n');

var distancia = parseInt(linhas[0]);

var tempo = distancia * 2;

console.log(`${tempo} minutos`);