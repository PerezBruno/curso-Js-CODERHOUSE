/*   OBJETOS  */

// const nombre = "Monitor de 24 pulgadas";
// const precio = 300;
// const disponible = true;

const producto = {
    nombre: "Monitor de 24 pulgadas",
    precio: 300,
    disponible: true
}
// console.log(producto)

// console.log(producto.precio)

// console.log(producto["nombre"])

// producto.imagen = "imagen.jpg" // agrego imagen al objeto

// delete producto.disponible; //elimino la clave-valor disponible del objeto


//DESTRUCTURING - Lo vamos a repasar en las proximas clases

// const {precio} = producto;

// console.log(precio)


// ****** OBJECT CONSTRUCTOR
/*
function Producto (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    //valor por defecto
    this.disponible = true;
}

const producto2 = new Producto("Teclado", 1000);
const producto3 = new Producto("Mouse", 500);

console.log(producto2)
console.log(producto3)
*/


// forma de crear METODOS PERSONALIZADOS**
/*
function Cliente(nombre, edad, domicilio){
    this.nombre = nombre;
    this.edad = edad;
    this.domicilio = domicilio;
    this.saludar = function(){
        console.log("Saludos "+ this.nombre);
    }

}

const cliente1 = new Cliente("Bruno", 38, "por ahí");
const cliente2 = new Cliente("Homero", 50, "por ahí");


cliente1.saludar(); // utilizo el método que cree 
cliente2.saludar();

*/

//MODO OBSOLETO DE CREAR OBJETOS Y MÉTODOS

class Usuario{
    constructor(nombre, acceso){
        this.nombre = nombre;
        this.acceso = acceso;
    }

    mostrarInfo(){
        return `Usuario: ${this.nombre}, tu acceso es ${this.acceso}`;
    }
}

const objetoNuevo = new Usuario("Bruno", "Aceptado");

console.log(objetoNuevo.mostrarInfo())



function SeguroAuto(marca, modelo, clase, valorMercado, condicion){
    this.marca = marca;
    this.modelo = modelo;
    this.clase = clase;
    this.valorMercado = valorMercado;
    this.condicion = condicion;
    this.cobertura = 100;
    this.autorizado = true;
}

const clienteX023 = new SeguroAuto("Ford", "Mustang GT Premium", 2022, 43000, "Optima");

console.log(clienteX023)