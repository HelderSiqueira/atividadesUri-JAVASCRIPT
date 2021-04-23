'use strict'

const lines = prompt('digite os valores de entrada').split(' ');

var idFuncionario = Number(lines[0]);
var qtdHorasTrabalhadas = Number(lines[1]);
var valorHora = Number(lines[2]);

const salario = qtdHorasTrabalhadas * valorHora;

console.log(`NUMBER = ${idFuncionario}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);