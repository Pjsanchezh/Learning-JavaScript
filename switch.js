'use strict';

var edad = 20;
var texto= '';

switch (edad) {
    case 17:
        texto = 'no tienes 18 anos';
        break;
    case 18:
        texto = 'eres mayor de edad';
        break;
    default:
        texto = 'parece que no tienes edad';
        break;
}

console.log(texto);