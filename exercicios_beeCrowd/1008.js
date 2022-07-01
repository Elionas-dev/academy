var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split('\n');

var [NUMBER, NUMBER_HOURS, SALARY_HOURS] = linhas.map(item => parseFloat(item));

var SALARY = NUMBER_HOURS * SALARY_HOURS;

console.log(`NUMBER = ${NUMBER}`);
console.log(`SALARY = U$ ${SALARY.toFixed(2)}`);