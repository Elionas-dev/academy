var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split('\n').map(item => parseFloat(item));

var [distancia, combustivel] = linhas;

var consumo = distancia / combustivel;

console.log(`${consumo.toFixed(3)} km/l`);
  