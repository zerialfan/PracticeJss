// Hay que encontrar el nombre 
// De quien se solicite en la consola de data
// Luego hay que hacer un promedio de su salario
// Esto debe ser dinamico 
function obtenerTrabajo(nombrePersona) {
    const persona = findName(nombrePersona)
    return persona.trabajos
}
// Obtener salarios te regresa un array con los salarios de la persona seleccionada
function obtenerSalarios(nombrePersona) {
    const trabajos = obtenerTrabajo(nombrePersona)
    return trabajos.map(item => item.salario)
}

function findName(nombre) {
    return salarios.find((persona)=> persona.name === nombre)
}

function medianaPersona(nombrePersona) {
    const salarios =obtenerSalarios(nombrePersona)
    const medianaSalario = PlatziMath.calcularMediana(salarios)
    return medianaSalario
}

function proyeccionSalarial(nombrePersona) {
    const salarios =obtenerSalarios(nombrePersona)
    const arrSalarial = []
    
    for (let i = 1; i < salarios.length; i++) {
        const crecimiento = (salarios[i]- salarios[i-1])/salarios[i-1];
        arrSalarial.push(crecimiento);
    }
    const promedio = PlatziMath.calcularPromedio(arrSalarial)
    const ultimoSalario = salarios[salarios.length - 1]
    const salarioNuevo = ultimoSalario * (1 + promedio)
    return salarioNuevo
}
