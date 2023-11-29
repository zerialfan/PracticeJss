function nombreCompleto(nombre,apellido){
    return 'su nombre es' +" " + nombre + ' ' + apellido;
}

function ejecutar(nombre, apellido,callbackValue){
    return callbackValue(nombre,apellido);
}

console.log(ejecutar('alexis','sanchez',nombreCompleto));