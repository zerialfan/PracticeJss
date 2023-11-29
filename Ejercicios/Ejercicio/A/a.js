let pAlert = document.getElementById('pAlert');
let result = "";

do {
    let cadena = prompt("introduzca su texto");
    if (result ==="") {
        result = cadena;
    } else {
        result = result + " " + cadena;
    }
    
} while (confirm('Desea continuar?'));

pAlert.innerHTML = result;