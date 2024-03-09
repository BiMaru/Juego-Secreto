

let numeroSecreto = 0;
let intentos = 0;  
let listaNumerosSorteados = [];
let numeroMaximo = 10; 

console.log(numeroSecreto); // para saber cual es el numero secreto al inicio

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}

function verificarIntento() { 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // reemplazo x el id-PARSEINT para numero entero
  
    if (numeroDeUsuario === numeroSecreto) { 
       asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); // comillas Simples e Invertidas 
    // el usuario acerto
       document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el uduario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor'); 
        } else{
            asignarTextoElemento('p','El número secreto es mayor'); 
        }
        intentos++; // cada vez que la persona no acierte se incrementa el contador
        limpiarCaja();  // llamo la funcion cdo no acerte
    }// para cambiar el texto si acertamos
    return; // retorna la funcion   
    }

    // funcion para vaciar la caja
function limpiarCaja() { // 2 formas de hacerlo
    document.querySelector('#valorUsuario').value = '';// Para reducir codigo uso esta forma
}

//funcion para generar el numero
function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;// numero secreto lo hago variable, creo una variable numeroMaximo, cambio el 10 por variable
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo) {
       asignarTextoElemento('p', 'Ya se sortearon todos los numero posibles');
    } else { 
       // Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) { // METODO INCLUDES
            return generarNumeroSecreto(); // METODO RECURSIVIDAD- La funcion se llama asi misma
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }    
    }
}
// Pongo en una funcion los mensajes que genere debajo
 function condicionesIniciales(){ 
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`); // reemplazo el 10 por la var numeroMaximo con templeString cambio las comillas por las invertidas
    numeroSecreto = generarNumeroSecreto(); // Traigo de reiniciarjuego
    intentos = 1; //// Traigo de reiniciarjuego
 }

// Una funcion puede hacer varias acciones internamente
function reiniciarJuego() {
    //1-limpiar la caja
    limpiarCaja();
    //2-Indicar mensaje de inicio de Intervalos de numeros
    condicionesIniciales(); // Cambio mensejesIniciales por Condiciones Iniciales que va hacer las 3 acciones
    //3-Generar el numero aleatorio- Ya lo tengo arriba lo traigo ( no lo anulo arriba lo dejo )
    //numeroSecreto = generarNumeroSecreto(); // le saco el let porque no estoy declarando de nuevo el numero secreto-Solo hago una nueva invocacion a la funcion
    //4-Inicializar el numero de intentos ( intentos = 1; )
    //5-Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales(); // cambio mensajesIniciales por codiciones

