let pAlt = document.getElementById('pAlt');
let btn = document.getElementById('btn');

function getValue(id) {
    let value = parseInt(document.getElementById(id).value);
    if(isNaN (value)){
        throw new Error('Introduce un número mamada');
    }
    return value;
}
function onClickHandler() {
    try{
        let num1 = getValue('input');
        let num2 = getValue('input2');

        viewResult(suma(num1,num2));
    } catch (error){
        pAlt.innerHTML = error.message; 
    }
}
function suma(num1, num2){
    return num1 + num2;
}

function viewResult(result) {
    pAlt.innerText = result;
}
btn.addEventListener('click', onClickHandler);

// function onClick() {
//     let num1 = parseInt(document.getElementById('input').value);
//     let num2 = parseInt(document.getElementById('input2').value);
    
//     suma (num1,num2);
// }

// function suma(num1, num2) {
//     let calc = num1 + num2; 
//     if (!isNaN(calc)) {
//         pAlt.innerText = calc;
//     }else {
//         pAlt.innerText = 'Esto no es un número';
//     }
// }
// btn.addEventListener('click', onClick);
