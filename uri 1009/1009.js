'use strict'

const lines = prompt('digite os valores de entrada').split(' ');

var nome = String(lines[0]);
var salarioFixo = Number(lines[1]);
var totalVendas = Number(lines[2]);

const comissao = totalVendas * 0.15;
const salarioFinal = salarioFixo + comissao;

console.log(`TOTAL = R$ ${salarioFinal.toFixed(2)}`);