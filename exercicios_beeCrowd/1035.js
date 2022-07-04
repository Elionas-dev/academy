var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split(' ');

let [A, B, C, D] = linhas.map(item => parseInt(item));

let soma1 = C + D;
let soma2 = A + B;

let result = 'Valores nao aceitos';


if (B > C && D > A)
  if (soma1 > soma2)
    if (C > 0 && D > 0)
     if (A % 2 === 0) 
      result = "Valores aceitos";

 
console.log(result);
