'use strict'

const lines = prompt('digite os valores de entrada').split(' ');

var raio = Number(lines[0]);
var pi = 3.14159;

const volumeEsfera = (4/3) * pi * Math.pow(raio, 3);

console.log(`VOLUME = ${volumeEsfera.toFixed(3)}`);