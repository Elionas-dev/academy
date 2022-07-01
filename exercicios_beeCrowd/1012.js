var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split(' ');

var [A, B, C] = linhas.map(item => parseFloat(item));

var TRIANGULO = (A * C)/2;
var CIRCULO = 3.14159 * Math.pow(C, 2);
var TRAPEZIO = ((A + B) * C)/2; 
var QUADRADO = B * B;
var RETANGULO = A * B;

console.log(`TRIANGULO: ${TRIANGULO.toFixed(3)}`);
console.log(`CIRCULO: ${CIRCULO.toFixed(3)}`);
console.log(`TRAPEZIO: ${TRAPEZIO.toFixed(3)}`);
console.log(`QUADRADO: ${QUADRADO.toFixed(3)}`);
console.log(`RETANGULO: ${RETANGULO.toFixed(3)}`);