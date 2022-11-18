/*
switch(){

}



let food = prompt("Que se le antoja?");

switch (food) {
    case "hamburguesa":
        console.log("Vas a cenar hamburguesa")        
        break;
        case "pizza":
            console.log("Vas a comer pizza")
        break;
    case "lomo":
        console.log("Vas a comer lomo")
        default:
        console.log("Ninguna de las anteriores")
        break;
    }
    */

    /* 
    Template literals
    
    `` -> backticks
    
    */

/*
    let pelicula = prompt( `Elija una película:
    1: Batman
    2: Superman
    3:Spiderman`);

    switch (pelicula) {
        case "1":
            console.log("Batman")
            break;
        case "2":
            console.log("Superman")
            break;
        case "3":
            console.log("Spiderman")
            break;
        default:
            console.log("Ninguna de las anteriores")
            break;
    }

    */

//  *************** Ciclos POR CONTEO y ciclos CONDICIONALES   ******************
    


/*  
    ***********  ciclo WHILE  **********

    while(condicion)[
        "cuerpo del bucle"
    ]
    */

    // let i = 0;

    // while (i <= 3){
    //     alert(i);
    //     i++;
    // }

/*
    let entrada = prompt("Ingrese un texto o ESC para interrumpir");
    let texto = "";

    while (entrada != "ESC" && entrada != "esc") {
        texto += entrada + " ";
        entrada = prompt("Ingrese un texto o ESC para interrumpir");
    }

    alert(texto);

    */


    // ****************  ciclo DO... WHILE  ****************

    /* 
    do{
        "cuerpo del bucle"
    } while (condición)

    */

/*    let y = 0;

    do{
        console.log(`El valor de Y es: ${y}`);
        y++;
    } while (y <= 10)

    */


    // ****************  ciclo FOR  ******************

    /*
    for(desde; hasta; actualización){
        cuerpo del bucle
    }
    
    for (let i = 0; i <= 5; i++){
        alert(`El valor de I es: ${i}`)
    }
   
   
    */

/*
    let numero = parseInt(prompt("ingrese un número"));

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} X ${i} = ${resultado}`);
        
    }
    */

    // for (let i = 1; i <= 10; i++){
    //     if (i===6){
    //         break; // rompe la ejecución del bucle
    //     }
    //     alert(`El valor de I es: ${i}`)
    // }

    // for (let i = 1; i <= 10; i++){
    //     if (i === 6){
    //         continue; continúa con la ejecución del bucle
    //     }
    //     alert(`El valor de I es: ${i}`)
    // }