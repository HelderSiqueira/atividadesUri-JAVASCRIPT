'use strict'

const lines = prompt('digite os valores de entrada').split(' ');

var A = Number(lines[0]);
var B = Number(lines[1]);
var C = Number(lines[2]);
var D = Number(lines[3]);

const diferenca = A * B - C * D;

console.log(`DIFERENCA = ${diferenca}`);
