'use strict'

const lines = prompt('digite os valores de entrada').split(' ');

var idItem01 = Number(lines[0]);
var qtdItem01 = Number(lines[1]);
var valorUnitarioItem01 = Number(lines[2]);
var valorTotalItem01 = qtdItem01 * valorUnitarioItem01;

var idItem02 = Number(lines[3]);
var qtdItem02 = Number(lines[4]);
var valorUnitarioItem02 = Number(lines[5]);
var valorTotalItem02 = qtdItem02 * valorUnitarioItem02;

const TotalCompra = valorTotalItem01 + valorTotalItem02;

console.log(`VALOR TOTAL A PAGAR: R$ ${TotalCompra.toFixed(2)}`);