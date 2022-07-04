var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split('\n');

var [tempo, velocidade] = linhas.map(item => parseInt(item));

var litros = (tempo * velocidade) / 12;

console.log(`${litros.toFixed(3)}`);