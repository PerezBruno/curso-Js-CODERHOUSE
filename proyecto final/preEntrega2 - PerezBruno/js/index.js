


let clienteNombre;
let vehiculo;
let marca;
let modelo;
let clase;
let valorMercado;
let condicion;
let clientes = [];
let seguros = [];
// datos para crear el objeto AUTO "es el constructor?"
function SeguroAuto(marca, modelo, clase, valorMercado, condicion){
  this.marca = marca;
  this.modelo = modelo;
  this.clase = clase;
  this.valorMercado = valorMercado;
  this.condicion = condicion;
  this.cobertura = 10;
  this.autorizado = true;
  }

function iniciarEvento() {
  clienteNombre = prompt("Ingrese su nombre");
  if (clienteNombre == "") {
    alert("Por favor ingresa al menos un nombre");
    iniciarEvento();
  } else if (clienteNombre == null) {
    alert("Hasta la próxima!!");
  } else {
    alert(`Bienvenido ${clienteNombre}!!`)
    vehiculoSeleccion()
  }
}

function vehiculoSeleccion(){
  vehiculo = prompt(`${clienteNombre}! En esta oportunidad vas a asegurar un vehículo.
  Puede ser:

    3 - Auto;
  `);
  if (vehiculo == 1){
    seguroBici();
  }else if (vehiculo == 2){
    seguroMoto();
  }else 
    seguroAuto();
}
  

function seguroAuto(){
  marca = prompt("Qué marca es?")
  modelo = prompt("Modelo?")
  clase = prompt("De que año es?")
  valorMercado = prompt("Cuál es su valor de mercado?")
  condicion = prompt(`Cual es su condición?:
  0 - Óptima;
  1 - Aceptable;
  2 - Deteriorado`)

  if (condicion == 0){
    objetoAuto()
    alert(  `${clienteNombre} Tenes un 20% de descuento por las condiciones del vehículo` );
  }else if (condicion == 1){
    objetoAuto()
    alert(`${prueba1} Sus datos han sido cargados` )
  }else
    alert("Su vehículo no puede asegurarse")
}
  
function objetoAuto(){
  const prueba1 = new SeguroAuto(marca, modelo, clase, valorMercado, condicion);
  
  prompt(`Detalles del vehículo a asegurar:
  ${Object.values(prueba1)}`) //falta que el objeto aparezca en el prompt

}


// CONSULTAS****
/*
el objeto se declara en una variable CONST?
Un como asigno el nombre del objeto al crearlo?
como visualizo al objeto??

en qué ámbito creo el objeto para poder utilizar los valores en otras funciones??

*/


iniciarEvento()