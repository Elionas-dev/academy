var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split(' ');

let [A, B] = linhas.map(item => parseInt(item));

if(A % B === 0 || B % A === 0){
    console.log(`Sao Multiplos`);
} else {
    console.log(`Nao sao Multiplos`);
}