function findNameKey(personaBuscada) {
    const foundPerson = salarios.find((foundPerson)=>{
        return foundPerson.name === personaBuscada;
    })
    return foundPerson
}

function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name === personaEnBusqueda)
}
