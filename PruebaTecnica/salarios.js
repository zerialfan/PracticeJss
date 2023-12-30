function encontrarPersona(findName) {
    return salarios.find((persona)=> persona.name === findName)
}

function medianaPersona(nombrePersona) {
    const chamba = encontrarPersona(nombrePersona).trabajos;

    const money = chamba.map((item)=>{
        return item.salario
    })
    const medianaSalarial = PlatziMath.calcularMediana(money)
    console.log(chamba, money);
    return medianaSalarial;
}