function saludar(nombre) {
    alert('Hola ' + nombre);
}

function edadConNombre(callBackValue) {
    var nombre = prompt('Coloca tu nombre');
    callBackValue(nombre); 
}

edadConNombre(saludar);
