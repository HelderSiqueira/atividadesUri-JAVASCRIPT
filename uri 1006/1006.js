'use strict'

const lines = prompt('digite os valores de entrada').split(' ');

var A = Number(lines[0]);
var B = Number(lines[1]);
var C = Number(lines[2]);

const media = (A * 2 + B * 3 + C * 5) / 10.0;

console.log(`MEDIA = ${media.toFixed(1)}`);
