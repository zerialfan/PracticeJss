let pAge = document.getElementById('pAge');

// El ejercicio pide crear un prompt
// para comprobar si es mayor de edad

let edad = prompt('Intruduce tu edad');
if (Number(edad) == edad) {
    if (edad > 18) {
        pAge.innerText = 'Bienvenidio a las pvtas';
    } else{
        pAge.innerText = 'Alo FBI, tenemos a un chistosito';
    } 
}else{
    alert('Pone un numero gran pendejo');
}