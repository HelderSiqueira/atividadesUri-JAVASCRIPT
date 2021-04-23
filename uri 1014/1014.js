'use strict'

const lines = prompt('digite os valores de entrada').split(' ');

var distanciaPercorrida = Number(lines[0]);
var combustivelGasto = Number(lines[1]);

const consumoMedio = distanciaPercorrida / combustivelGasto;

console.log(`${consumoMedio.toFixed(3)} km/1`)