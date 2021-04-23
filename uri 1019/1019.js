'use strict'

const lines = prompt('digite os valores de entrada').split(' ');

const n1 = Number(lines[0]); 
const n2 = n1 % 3600;
const n3 = n2 % 60;

const qtdHoras = parseInt(n1 / 3600);

const qtdMinutos = parseInt(n2 / 60);

const qtdSegundos = parseInt(n3);

console.log(`${qtdHoras}:${qtdMinutos}:${qtdSegundos}`);
