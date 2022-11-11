// ***** variables ******

let nombre = "Bruno" //string
let edad = 38 // number
let alumno = true // booleans

// console.log(nombre);
// console.log(edad);
// console.log(alumno);

const CURSO = "Js";

console.log(CURSO);

//DIFERENCIAS ENTRE CONST Y LET 
//****  let puede estar declarada sin datos
//****  const debe tener su correspondiente dato al inicializarla.
//****  let permite modificar el dato
//****  const no permite que se modifique el dato

let nombre2 = "Bruno";
nombre2 = "Leandro";

const apellido = "Pérez"
//apellido = "Nardone"

console.log(nombre2)
console.log(apellido)


//OPERADORES ARITMÉTICOS
/*  "+", "-", "*", "/"   */

let numero1= 6;
let numero2 = 5;

let suma = numero1 + numero2
console.log(suma)



//prompt("Ingresa tu nombre")

let nombre3 = prompt("ingrese su nombre")

let numero3 = Number(prompt("ingrese su edad"))
// para transformar un un numero se puede utilizar tanto "Number" como "parseInt"

alert("Bienvenido " + nombre)
