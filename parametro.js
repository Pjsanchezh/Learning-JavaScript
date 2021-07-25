'use strict';

var n1 = prompt('Dime una palabra', 'no escribiste nada');
var n2 = prompt('Dime otra palabra', 'no escribiste nada');

function UnirPalabras(n1, n2){

    var PalabrasUnidas = n1 + ' ' + n2;

    return PalabrasUnidas;
}

var resultado = UnirPalabras(n1,n2);
console.log(resultado);