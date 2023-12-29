console.log(salarios)
const searchPerson = 'juanita'

const salaryPerson = salarios.find((salaryPerson)=>{
    return salaryPerson.name == searchPerson
})