// Probando si esta bien enlazado
//alert("Hola!");



alert("Bienvenido a la bitacora de buceo online");

// CARGA DE DATOS MEDIANTE PROMPT 

let fecha = prompt("Ingrese fecha del buceo");
let profundidadBuceo = Number(prompt("Ingrese, en metros, la profundidad maxima del buceo realizado"));
let tiempoDeFondo = Number(prompt("Ingrese, en minutos, el tiempo de fondo del buzo"));
let tiempoDeAscenso = Number(prompt("Ingrese, en minutos, el tiempo de ascenso del buzo"));
let buzo1 = prompt("Ingrese nombre y apellido del buzo que acuatizo");
let supervisorBuceo = prompt("ingrese el nombre y apellido del supervisor de buceo");
let tarea = prompt("Ingrese tarea realizada");

let bitacora = `La fecha de su buceo fue: ${fecha} \nLa tarea del buceo fue: ${tarea} \nLa profundidad maxima del buceo fue de : ${profundidadBuceo}mts \nEl tiempo de fondo fue de: ${tiempoDeFondo}min \nEl tiempo de ascenso del buzo fue de: ${tiempoDeAscenso}min \nEl buzo que realizo el buceo fue: ${buzo1} \nEl supervisor del buceo fue: ${supervisorBuceo};`

console.log(bitacora);

// POSIBILIDAD DE CARGAR MAS BUZOS

let buzoExtra;
do {
    buzoExtra = prompt("Necesita agregar otro buzo? ingrese su nombre y apellido");
    if (buzoExtra != null) {
        console.log("En la operacion de buceo tambien participo "+ buzoExtra);
    }
} while (buzoExtra != null);


/* 
Esto lo quise hacer con una funcion => pero me di cuenta que no lo iba a usar mas que para calcular el tiempo total de buceo. Asi que tome la decision de declarar una variable tiempoTotalBuceo y sumar tiempoDeFondo y tiempoDeAscenso
*/
let tiempoTotalBuceo = tiempoDeFondo + tiempoDeAscenso;

console.log("El tiempo total de buceo fue de "+ tiempoTotalBuceo + " min.");


//RESULTADO MEDIANTE OPERADORES LOGICOS PARA MOSTRAR UN RESULTADO

if ((tiempoTotalBuceo >= 90) && (profundidadBuceo >= 20)){
    alert("El buzo debe hacer minimamente una parada de descompresion de 10min a 6mts y consultar la tabla de descompresion correspondiente");
    }else if ((tiempoTotalBuceo >= 50) && (profundidadBuceo >= 12)){
        alert("El buzo debe hacer una parada de descompresion de 5min a 6mts");
        }else{
        alert("El buzo puede subir a superficie sin realizar paradas de descompresion");
        }

alert("Gracias por utilizar la bitacora de buceo web");