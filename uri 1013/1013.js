'use strict'

const lines = prompt('digite os valores de entrada').split(' ');

var A = Number(lines[0]);
var B = Number(lines[1]);
var C = Number(lines[2]);

const maiorAeB = (A + B + Math.abs(A - B)) / 2;
const maiorXeC = (C + maiorAeB + Math.abs(C - maiorAeB)) / 2;

console.log(`${maiorXeC} eh o maior`);