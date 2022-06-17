function init(){
    //variables 

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var op = document.getElementById("op").value;


    var suma = parseInt(num1) + parseInt(num2);
    var rest = num1 - num2;
    var mult = num1 * num2;
    var divi = num1 / num2;   


if (op == "suma") {result = suma}
    else if (op == "rest") {result = rest}
    else if (op == "mult") {result = mult}
    else if (op == "divi") {result = divi};
   

    console.log(num1);
    console.log(num2);
    console.log(op);
    console.log(result);
    console.log(suma);
    console.log(rest);
    console.log(mult);  
    console.log(divi);

    //   alert("el resultado es: " + result);

resultado.innerHTML = result;

}
    //eventos










