/* Actividad 1 

let nuevoNombre = prompt("Ingrese su nombre")
let nombre = "Juan";

if (nombre == nuevoNombre) {
    alert("Fui yo")
} else {
    alert("Yo no fui")
}

*/

/*
 Actividad 2
 
 let letra = prompt("Presione una tecla") ;
 
 if (letra.toUpperCase()==="Y") {
     alert("Correcto")
    } else {
        alert("Error")
    }
    
    
    */

    /*
    Actividad 3
    */

    /*

    let numero = parseInt(prompt("Ingrese un número"));

    if (numero <= 4){
        if(numero === 1){
            alert("Elegiste a Homero");
        }else if (numero === 2){
            alert("Elegiste a Marge");
        }else if (numero === 3){
            alert("Elegiste a Bart");
        } else 
            alert("Elegiste a Lisa")
    } else
        alert("El número elegido es mayor a 4")
        
        */

/*
    Actividad 4
*/
/*
let monto = parseInt(prompt("ingrese un número"));

if (3000 < monto){
    console.log("Presupuesto alto");
} else if ((1000 < monto) && (monto <= 3000)){
    console.log("Presupuesto medio");
} else
    console.log("Presupuesto bajo")
    */

    let articulo1 = prompt("Ingrese un artículo de almacén");
    let articulo2 = prompt("Ingrese otro artículo de almacén");
    let articulo3 = prompt("Ingrese un artículo de almacén más");
    let articulo4 = prompt("Ingrese el último artículo de almacén");


    if ((articulo1 != "") && (articulo2 != "") && (articulo3 != "") && (articulo4 != "")){
        alert(articulo1 +" " + articulo2 +" "+ articulo3 +" "+ articulo4 )
    }else
        alert("Error! Es necesario cargar todos los productos")