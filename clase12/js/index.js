const multipart = require("formidable/src/plugins/multipart");

console.log ('estamos en clase 12');

function Multiplicar (a,b,c) {
}

//multiplicar(2,3,4);


function saludar (nombre, apellido) {
    return ' mi nombre es ' + nombre + ' y mi apellido ' + apellido;
}

console.log(saludar('juan', 'perez'));

let i = 0;

while (i < 10) {

    console.log(i + ' ' + 'hola');
 //i = i + 1 ;
 i++;
}

let frutos = ['manzana', 'pera', 'uva'];
console.log(frutos[0]);

console.log(frutos.length);

for (let index = 0; index < frutos.length; index++) {
    //console.log(frutos[index]);
    console.log(`${index} - ${frutos[index]}`);
} 

let a = 0;

do {
    console.log(a + ' ' + 'holamunodo');
    a++;
} while (a < 10);



console.log(a);

/* let numeroUsuario = Number(prompt('Ingrese un número por favor: '));
for (let index = 0; index <= numeroUsuario; index++) {
    console.log('Estamos contando hasta ' + index);
} */

function miFuncion() {
    console.log('Soy una funcion tradicional');

}

miFuncion();

const funcionFlecha = () => {
    console.log('Soy una funcion flecha');
}

funcionFlecha(); //ejecuta la funcion flecha