var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split('\n');

var p1 = linhas[0].split(' ');
var p2 = linhas[1].split(' ');

var [x1, y1] = p1.map(item => parseFloat(item));
var [x2, y2] = p2.map(item => parseFloat(item));

var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));


console.log(`${distancia.toFixed(4)}`);


