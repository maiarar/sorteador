'use strict'

let minimo = process.argv[2],
    maximo = process.argv[3];

minimo = Math.ceil(minimo);
maximo = Math.floor(maximo);

let resultado = Math.floor(
    Math.random() * (maximo - minimo + 1)) 
    + minimo;

console.log(resultado?resultado:"passe os números mínimo e máximo");