'use strict'

const lines = prompt('digite os valores de entrada').split(' ');

var A = Number(lines[0]);
var B = Number(lines[1]);
var C = Number(lines[2]);
var pi = 3.14159;

const areaTriangulo = (A * C) / 2;
const areaCirculo =  pi * Math.pow(C, 2);
const areaTrapezio = ((A + B) * C) / 2;
const areaQuadrado = B * B;
const areaRetangulo = A * B;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);