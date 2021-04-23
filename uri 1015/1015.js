'use strict'

const lines = prompt('digite os valores de entrada').split(' ');

var x1 = Number(lines[0]);
var y1 = Number(lines[1]);
var x2 = Number(lines[2]);
var y2 = Number(lines[3]);

const distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(distancia.toFixed(4));