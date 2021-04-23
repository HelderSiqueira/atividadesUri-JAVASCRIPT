'use strict'

const lines = prompt('digite os valores de entrada').split(' ');

var tempoGasto = Number(lines[0]);
var velocidadeMedia = Number(lines[1]);

const totalPercorrido = tempoGasto * velocidadeMedia;
const combustivelGasto = totalPercorrido / 12;

console.log(combustivelGasto.toFixed(3));