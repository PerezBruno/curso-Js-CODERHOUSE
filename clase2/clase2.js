/*   estructura del condicional IF

if(condicion){
    bloque verdadero
} else{
    bloque falso
}


-----------------------------------
 OPERADORES LOGICOS 

== igual a
!= distinto de
> mayor a...
< menor a...

>= mayor o igual a...
<= menor o igual a...

&& and // y
|| or // ó


--------------------------------------

EJEMPLO

let puntaje = 1000;

if (puntaje >= 1000){
    console.log("Ganador");
} else {
    console.log("Perdedor");
}


let dinero = 900;
let totalAPagar = 800;

if ( dinero > totalAPagar ) {
    console.log("Compra exitosa")
} else {
    console.log("No se pudo realizar la compra")
}



let dinero = 900;
let totalAPagar = 800;
let tarjeta = false;

if (dinero > totalAPagar) {
    console.log("Puedes pagar con efectivo")
} else if (tarjeta){
    console.log("Puedes pagar con tarjeta")
} else {
    console.log("No puedes realizar la compra")
}

*/


// let efectivo = 300;
// let credito = 400;
// let disponible = efectivo + credito;
// let totalAPagar = 600;

// if (efectivo >= totalAPagar || credito >= totalAPagar || disponible >= totalAPagar) {
//     console.log("podemos realizar la compra")
// } else {
//     console.log("Vuelve pronto")
// }


/*
TABLA DE LA VERDAD DEL OPERADOR &&

X | Y | X && Y
T | T | T
T | F | F
F | T | F
F | F | F

la expresión solo es verdadera cuando ambos son verdaderos!



TABLA DE LA VERDAD DEL OPERADOR ||

X | Y | X || Y
T | T | T
T | F | T
F | T | T
F | F | F


la expresión es verdadera si alguno de los dos es verdadero!
*/

// let nombreAlumno = prompt("ingrese su nombre")

// let apellidoAlumno = prompt("Ingrese su apellido")

// if ((nombreAlumno != "")&&( apellidoAlumno != "")) {
//     alert("Nombre: " + nombreAlumno + " Apellido: " + apellidoAlumno)
// } else {
//     alert("Error al ingresar los datos")
// }

/*
TRABAJO EN CLASE
*/

let numero1 = parseInt(prompt("ingrese un numero"))
let numero2 = parseInt(prompt("Ingrese otro número"))

if (numero1 > numero2) {
    alert(numero1 + " es mayor que " + numero2)
} else if(numero1 === numero2){
    alert("Los números son iguales")
}else{
    alert(numero2 + " es el mayor!")
}


if ((numero1 >= 0) && (numero1%2 === 0) ) {
    console.log("el primer número es par")
} else {
    console.log("El primer número es impar")
}