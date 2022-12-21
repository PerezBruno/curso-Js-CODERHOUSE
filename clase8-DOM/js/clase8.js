//******* Acceso a elementos  *********/
/*
let elemento;

// elemento = document;
// elemento = document.body;
elemento = document.images;

// utilizamos para identificar elementos dentro de nuestro HTML

console.log(elemento)
*/

//SELECION DE ELEMENTOS*************************

//  METODO TRADICIONAL PARA MANEJAR EL DOM

// let navbar = document.getElementsByTagName("nav");

// let contenedor = document.getElementsByClassName("card-body");

// let nombreForm = document.getElementById("nombre")
// // console.log(navbar);
// // console.log(contenedor);
// console.log(nombreForm);


//  METODOS MODERNOS PARA MANEJAR DOM

/*con querySelector se reconocen los elementos de igual manera que con css (con el nombre, ., #, etc*/

/*
let brand = document.querySelector(".btn");
let boton = document.querySelectorAll("button");
let foto = document.querySelector("#camara");//selecciona el id
let parrafos = document.querySelectorAll("p");//trae a todos los elementpos con la caracteristica solicitada en el argumento



console.log(brand)
console.log(boton)
console.log(foto)
console.log(parrafos)
*/

//MANIPULACIÓN DE ELEMENTOS DEL DOM***************

// EDITAR TEXTO DE UN ELEMENTO DEL HTML
/*let brand = document.querySelector(".navbar-brand").textContent = "ENCABEZADO NUEVO"

console.log(brand)
*/

//ELIMINAR UN ELEMENTO DEL HTML
/*
let elimino = document.querySelector("#camara");

elimino.remove()
*/

//AGREGAR UN ELEMNTO AL HTML 

/*
let agregar = document.createElement("h5");

agregar.innerHTML = "Este h5 fue agregado desde Js";

document.body.appendChild(agregar);
let agregarSpan = document.createElement("span");

agregarSpan.innerHTML = "Span creado desde el archivo Js";

agregarSpan.setAttribute("class", "text-danger fs-1");

document.querySelector("#camara").appendChild(agregarSpan)


let nuevoBoton = document.createElement("button");

nuevoBoton.textContent = "Botonazo nuevo!!"
nuevoBoton.setAttribute("class", "btn btn-success")

document.body.appendChild(nuevoBoton)

*/

// GENERAR ELEMENTOS EN EL DOM DESDE UN ARRAY********

let alumnos = ["Juan", "Paco", "Pedro"];

let listaVacia = document.querySelector("#tarjetas");

for (let a of alumnos){
    let listado = document.createElement("li");
    listado.innerHTML = a;
    listaVacia.appendChild(listado)
}

let cursos = [
    {titulo: "Desarrollo Web", precio:"1000"},
    {titulo: "Javascript", precio:"2000"},
    {titulo: "ReactJs", precio:"1500"}
];

for (let c of cursos){
    let contenedor = document.createElement(`div`);
    contenedor.innerHTML=`
    <h3>Curso: ${c.titulo}</h3>
    <p>Precio: ${c.precio}</p>
    <button class ="btn btn-success">Agregar</button>
    <button class ="btn btn-danger">Eliminar</button>`;

    document.body.appendChild(contenedor);
};


// hasta minuto 90