/*Primero voy a declarar una variable
que permita entrar un promt directo
del navegador */

let edad = prompt('¿Cual es tu edad?');
/*Ahora queda validar 
que se introduzca un numero */
if (Number(edad)== edad) {
//Luego de verificar que es un número
//se valida si es mayor a 18 añitos
    if (edad > 18) {
//si es mayor que se ejecute esto
        document.getElementById('pAlert').innerText ='Bienvenido';
    } else{
        document.getElementById('pAlert').innerText = 'No tienes edad suficiente';
    }
} else {
    document.getElementById('pAlert').innerText = 'Introduce un número';
}