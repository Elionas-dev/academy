var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split(' ').map(item => parseInt(item));

const [A, B, C] = linhas;

var maiorAB = (A + B + Math.abs(A - B)) / 2;
var maiorDeTodos= (C + maiorAB + Math.abs(C - maiorAB)) / 2;

console.log(`${maiorDeTodos} eh o maior`);