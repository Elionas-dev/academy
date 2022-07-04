var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split(' ');

let DDD = linhas.map(item => parseInt(item));

let result = 'DDD nao cadastrado'

if(DDD == 61){
    result = 'Brasilia';
}else if(DDD == 71){
    result = 'Salvador';
} else if(DDD == 11){
    result = 'Sao Paulo';
} else if(DDD == 21){
    result = 'Rio de Janeiro';
} else if(DDD == 32){
    result = 'Juiz de Fora';
} else if(DDD == 19){
    result = 'Campinas';
} else if(DDD == 27){
    result = 'Vitoria';
} else if(DDD == 31){
    result = 'Belo Horizonte';
}

console.log(result);