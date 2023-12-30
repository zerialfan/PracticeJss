// function findNameKey(personaBuscada) {
//     const foundPerson = salarios.find((foundPerson)=>{
//         return foundPerson.name === personaBuscada;
//     })
//     return foundPerson
// }
// El codigo de abajo busca reducir el numero de lienas
// Manteniendo la logica del mètodo find
function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name === personaEnBusqueda)
}
