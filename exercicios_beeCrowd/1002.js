var input = require('fs').readFileSync('./dev/stdin', 'utf8');

var n = 3.14159;
var raio =  parseFloat(input);

var area = n * Math.pow(raio, 2);

console.log(`A=${area.toFixed(4)}`);