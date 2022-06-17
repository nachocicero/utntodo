console.log("Hola mundo, soy script del archivo js");

//condicionales

if (true) {
    console.log("la condicion que evalua es verdadera TRUE");
    }
  /*   else {
        console.log("la condicion que evalua es falsa FALSE");
    } */
if (false) {
    console.log("no me van a ver en la consola");
    }

    console.log("===============================");

let edad =  prompt ("ingrese su edad");
let dinero = true;
if (edad >= 18) {
    if (dinero) { console.log("puedes comprar bebidas");}
    console.log("eres mayor de edad, podes ingresar a la fiesta");
    alert ('podes ingresar a la fiesta');
    } else { console.log("eres menor de edad, no podes ingresar a la fiesta");}

    console.log("===============================");

let saldo = 1000;
let compras = 2000;

if (saldo >= compras) { //si el saldo es mayor o igual a las compras
        console.log("podes comprar");
        alert("podes comprar");
      }else{
            console.log('no podes comprar');
            alert('no podes comprar');}

    console.log("===============================");
