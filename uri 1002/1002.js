'use strict'

const lines = prompt('digite os valores de entrada').split(' ');

var raio = Number(lines[0]);
var pi = 3.14159; 

const area = pi * Math.pow(raio, 2);

console.log(`A = ${area.toFixed(4)}`);
