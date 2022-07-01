var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split('\n');

var NOME = linhas[0]
var SALARIO_FIXO = parseFloat(linhas[1]);
var VENDAS = parseFloat(linhas[2]);

var TOTAL = SALARIO_FIXO + (VENDAS * 0.15);

console.log(`TOTAL = R$ ${TOTAL.toFixed(2)}`);