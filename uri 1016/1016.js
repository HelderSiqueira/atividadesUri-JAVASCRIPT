'use strict'

const lines = prompt('digite os valores de entrada').split(' ');

var distanciamento = Number(lines[0]);

var qtdMinutos = (60 * distanciamento) / 30;

console.log(`${qtdMinutos} minutos`);