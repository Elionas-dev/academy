var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split(' ');

var codigo = parseInt(linhas.shift());
var quantidade = parseInt(linhas.shift());

const prod1 = {codigo: 1, nome:'Cachorro Quente', preco: 4.00};
const prod2 = {codigo: 2, nome:'X-Salada', preco: 4.50};
const prod3 = {codigo: 3, nome:'X-Bacon', preco: 5.00};
const prod4 = {codigo: 4, nome:'Torrada Simples', preco: 2.00};
const prod5 = {codigo: 5, nome:'Refrigerante', preco: 1.50};


var result = 0;

    if(codigo == 1){
        result = prod1.preco*quantidade;
    }else if(codigo == 2){
        result = prod2.preco*quantidade;
    }else if(codigo == 3){
        result = prod3.preco*quantidade;
    }else if(codigo == 4){
        result = prod4.preco*quantidade;
    }else if(codigo == 5){
        result = prod5.preco*quantidade;
    }

console.log(`Total: R$ ${result.toFixed(2)}`);
