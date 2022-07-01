var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split('\n');

var RAIO = parseFloat(linhas);
var VOLUME = (4/3.0) * 3.14159 * Math.pow(RAIO, 3);

console.log(`VOLUME = ${VOLUME.toFixed(3)}`);