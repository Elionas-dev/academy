var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split('\n');

var PECAS1 = linhas.shift().split(' ');
var PECAS2 = linhas.shift().split(' ');

var PC1_CODIGO = PECAS1.shift();
var PC1_NUMERO = PECAS1.shift();
var PC1_VALOR = PECAS1.shift();

var PC2_CODIGO = PECAS2.shift();
var PC2_NUMERO = PECAS2.shift();
var PC2_VALOR = PECAS2.shift();

var VALOR_PAGO = (PC1_NUMERO * PC1_VALOR) + (PC2_NUMERO * PC2_VALOR);

console.log(`VALOR A PAGAR: R$ ${VALOR_PAGO.toFixed(2)}`);
