var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split(' ');

let [tempo1, tempo2] = linhas.map(item => parseInt(item));
let duracao;

if(tempo1 < tempo2){
    duracao = tempo2 - tempo1;
    console.log(`O JOGO DUROU ${duracao} HORA(S)`);
} else {
    duracao = tempo2 + 24 - tempo1;
    console.log(`O JOGO DUROU ${duracao} HORA(S)`);
}

