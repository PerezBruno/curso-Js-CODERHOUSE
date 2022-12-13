//  let frutas = ["🍉","🍊","🍋","🍌"];

// // console.log(frutas)

// // console.log(frutas[1])

// // //Reemplazo elementos

// // frutas[2] = "🥦"
// // console.log(frutas)

// // // Agrego elementos

// // frutas[4] = "🍕"
// // console.log(frutas)

// // ***  RECORRER ELEMENTOS DEL ARRAY ***

// // for (let i = 0 ; i < 4 ; i++){
// //     console.log(frutas [i])
// // };

// // PUSH

// frutas.push("🥩"); //agrega en la ultima posición
// frutas.unshift("🎂"); // agrega en la primer posición
// frutas.pop(); // elimina el último elemento
// frutas.shift(); // elimina el primer elemento
// frutas.splice(3, 2); //elimina la cantidad de elementos indicados en el 2do parámetro contando a partir del num índice obtenido en el primer parámetro.
// // frutas.join("*");

// console.log(frutas.join("@")) // los elemntos del array se imprimen por sonsola separados por lo que se indica como parámetro
// console.log(frutas)

// let comidas = ["🍖","🍦","🍩"];
// let alimentos = frutas.concat(comidas.concat(frutas))// une los arrays indicados

// console.log(alimentos)

// console.log(frutas.lastIndexOf("🍋"))// devuelve la posición en la que se encuentra lo solicitado en el parámetro

// console.log(frutas.includes("🍺"))//indica si existe o no el elemento en el array

const listaNombre = [];
let cantidad = 5;

do {
    let entrada = prompt ("Ingrese un nombre")
    listaNombre.push(entrada.toUpperCase())
   // console.log(listaNombre.length)
} while (listaNombre.length != cantidad);

console.log(listaNombre)

const eliminar = (nombre) => {
    let index = listaNombre.indexOf(nombre);

    if (index != -1){
        listaNombre.splice(index, 1)
    }
}

eliminar(prompt("nombre"))
console.log(listaNombre);