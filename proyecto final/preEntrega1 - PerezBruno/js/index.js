let clienteNombre;
let pedido;

// inicia la compra
function iniciarCompra(par1) {
  clienteNombre = par1 = prompt("Ingrese su nombre");
  if (clienteNombre == "") {
    alert("Por favor ingresa al menos un nombre");
    iniciarCompra();
  } else if (clienteNombre == null) {
    alert("Hasta la próxima!!");
  } else
    {alert(`Bienvenido ${clienteNombre}!!
    
Vallamos a pedir algo para comer!`)
        tipoDeComida();}
}

//selecciona el tipo de pedido
function tipoDeComida() {
  pedido = prompt(`Quieres pedir:
1 - Hamburguesa
2 - Superpancho
3 - Pizza

Para salir presiona 0`);
  if (pedido == "1") {
    pedido = "Hamburguesa";
  } else if (pedido == "2") {
    pedido = "Superpancho";
  } else if (pedido == "3") {
    pedido = "Pizza";
  } else pedido = pedido;

  switch (pedido) {
    case "Hamburguesa":
      hamburguesa()
      break;
    case "Superpancho":
      superpancho();
      break;
    case "Pizza":
      pizza();
      break;
    case "0":
      break;
    default:
      alert("la opción ingresada no es válida");
      tipoDeComida();
  }
}

function hamburguesa(){
    detalleComida1 = prompt(`Bien, será una ${pedido}!
    1 - Simple (pan + hamburguesa + queso)
    2 - Especial (pan + hambuerguesa + lechuga + tomate)
    3 - Super (pan + hamburguesa + lechuga + tomate + huevo + panceta)
    Para volver al menú anterior presiona la "v"`);
        if(detalleComida1 == "1"){
            detalleComida1 = " simple"
        } else if(detalleComida1 == "2"){
            detalleComida1 = " especial"
        } else if(detalleComida1 == "3"){
            detalleComida1 = " super"
        } else if (detalleComida1 == "v") {
            tipoDeComida();
          } else ;

    switch (detalleComida1) {
        case " simple":
            pedido += detalleComida1
            gaseosa()
            break;
            case " especial":
                pedido += detalleComida1
                gaseosa()
                break;
                case " super":
            pedido += detalleComida1
            gaseosa()
            break;
        default:
            alert("La opción ingresada no es válida")
            hamburguesa();
            break;
    }
}

function superpancho(){
    detalleComida2 = prompt(`Bien, será un ${pedido}!
    1 - Simple (pan + salchicha)
    2 - Especial (pan + salchicha + huevo)
    3 - Mundial (pan + salchicha + huevo + batatas pai)
    Para volver al menú anterior presiona la "v"`);
        if(detalleComida2 == "1"){
            detalleComida2 = " simple"
        } else if(detalleComida2 == "2"){
            detalleComida2 = " especial"
        } else if(detalleComida2 == "3"){
            detalleComida2 = " mundial"
        } else if (detalleComida2 == "v") {
            tipoDeComida();
          } else ;

    switch (detalleComida2) {
        case " simple":
            pedido += detalleComida2
            gaseosa()
            break;
            case " especial":
                pedido += detalleComida2
                gaseosa()
                break;
                case " mundial":
            pedido += detalleComida2
            gaseosa()
            break;
        default:
            break;
    }
}

function pizza(){
    detalleComida3 = prompt(`Bien, será un ${pedido}!
    1 - Mozzarella(masa + salsa + mozzarella)
    2 - Especial (masa + salsa + jamon + mozzarella + morron + huevo)
    3 - Napo (masa + salsa + jamon + mozzarella + tomate + ajo + oliva)
    Para volver al menú inicial presiona la "v"`);
        if(detalleComida3 == "1"){
            detalleComida3 = " de mozzarella"
        } else if(detalleComida3 == "2"){
            detalleComida3 = " especial"
        } else if(detalleComida3 == "3"){
            detalleComida3 = " napo"
        } else if (detalleComida3 == "v") {
            tipoDeComida();
          } else ;

    switch (detalleComida3) {
        case " de mozzarella":
            pedido += detalleComida3
            gaseosa()
            break;
            case " especial":
                pedido += detalleComida3
                gaseosa()
                break;
                case " napo":
            pedido += detalleComida3
            gaseosa()
            break;
        default:
            break;
    }
}

//permite sumar gaseosa al pedido
function gaseosa() {
  conBebida = prompt(`Queres sumarle gaseosa?
    1 - Si, por favor!
    2 - No, gracias!
    Para volver al menú inicial presiona la "v"`);

  switch (conBebida) {
    case "1":
      tipoDeBebida();
      break;
    case "2":
        bebida = "sin bebida"
      papas();
      break;
    case "v":
      tipoDeComida();
      case null:
        break;
    default:
      alert("la opción ingresada no es válida");
      gaseosa();
      break;
  }
}

//selecciona el tipo de bebida
function tipoDeBebida() {
  bebida = prompt(`1 - Coca cola 500 cc
    2 - Sprite 500 cc
    3 - Fanta naranja 500 cc
    4 - Agua 500 cc
    Para volver al menú inicial presiona la "v"`);
    if(bebida == "1"){
        bebida = " Coca de 500 cc"
    } else if(bebida == "2"){
        bebida = " Sprite de 500 cc"
    } else if(bebida == "3"){
        bebida = " Fanta de 500 cc"
     } else if(bebida == "4"){
            bebida = " Agua de 500 cc"
    } else if (bebida == "v") {
        tipoDeComida();
      } else ;
  switch (bebida) {
    case " Coca de 500 cc":
      alert(`Sale con una ${bebida}!`);
      papas();
      break;
    case " Sprite de 500 cc":
      alert(`Sale con una ${bebida}!`);
      papas();
      break;
    case " Fanta de 500 cc":
      alert(`Sale con una ${bebida}!`);
      papas();
      break;
    case " Agua de 500 cc":
      alert(`Sale con un ${bebida}!`);
      papas();
      break;
    case "v":
      tipoDeComida();
      break;
    default:
      alert("la opción ingresada no es válida");
      tipoDeBebida();
      break;
  }
}

//permite sumar papas al pedido
function papas() {
  alert("Las papas van de regalo por ser tu primer compra!!!");
  pedidoCompleto()
}

function pedidoCompleto(){
    confirma = prompt(`${clienteNombre}, tu pedido quedó compuesto por: ${pedido} ${bebida} y unas papas de regalo!!
    
    1 - confirmar
    
    Para volver al menú inicial presiona la "v"`)
    if(confirma == "1"){
        alert("Excelente!!! La próxima clase ajustamos el resto de los detalles!")
    } else if (confirma == "v"){
        tipoDeComida()
    } else
      {alert("la opción ingresada no es válida")
      pedidoCompleto()}
  }
