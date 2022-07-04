var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split(' ');

let [A, B, C, D] = linhas.map(item => parseInt(item));

let soma1 = C + D;
let soma2 = A + B;

if (B > C && D > A) {
  if (soma1 > soma2) {
    if (C > 0 && D > 0) {
      A = A % 2;
      if ((A === 0)) {
        console.log("Valores aceitos");
      }else {
        console.log("Valores nao aceitos");
      }
    }else {
        console.log("Valores nao aceitos");
      }
  }else {
    console.log("Valores nao aceitos");
  }
} else {
  console.log("Valores nao aceitos");
}