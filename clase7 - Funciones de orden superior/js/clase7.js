/*function primero(segundo){
    setTimeout(function(){
        console.log("primero");
        segundo();
    }, 3000);
}


function segundo (){
    console.log("segundo")
}


primero(segundo)*/


// *****  FOR EACH  *****
/*const pendientes = ["asistencias", "desafíos", "preentregas", "entrega final"];

pendientes.forEach((p, indice)=>{
    console.log(`${indice} : ${p}`)
})*/

// FILTRADO DE ELEMENTOS

/*
const carrito = [
    {nombre : "Monitor", precio : 1000},
    {nombre : "Mouse", precio : 500},
    {nombre : "Tv", precio : 3000},
    {nombre : "Teclado", precio : 180}
]
*/

//*********FILTER  ******** */

// let resultado = carrito.filter((p)=>p.precio < 1000);// devuelve todos los elementos que contengan el elemento ingresado en el parámetro de búsqueda.

// console.log(resultado) 

//************** FIND ******************/
/*
let filtrado = carrito.find((e)=>e.precio < 1000); // devuelve solamente el primer elemento que encuentre que cumpla con el parámetro ingresado.

console.log(filtrado)
*/

// let numeros = [5, 25, 0, 96, 118, 6, 3, 1];

// console.log(Math.max(...numeros));

// console.log(Math.max(5, 25, 96, 118, 6, 3));



// console.log(Math.min(...numeros));

// console.log(Math.min(5, 0, 25, 96, 118, 6, 3));



let dia = new Date();

console.log (dia);

console.log(dia.getFullYear());

console.log(dia.getMonth());

console.log(dia.getDay());

console.log(dia.getHours());
