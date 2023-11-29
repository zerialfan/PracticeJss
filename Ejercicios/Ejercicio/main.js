// Realiza un script que pida cadenas 
// de texto  hasta que se pulse “cancelar”.
//Al salir con “cancelar” deben mostrarse
//todas las cadenas concatenadas con un 
// guión -.
let pAlert = document.getElementById('pAlert');
let result = ""; 

do {
    let start = prompt("introduce un texto");
   
    if(result === ""){
        result = start;
    } else {
        result = result + "-" + start;
    }
} while (confirm("Desea seguir?"));
pAlert.innerText = result;