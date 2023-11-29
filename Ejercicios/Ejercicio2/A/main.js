let pAlert = document.getElementById('pAlert');


function calculate() {
    let input = parseFloat(document.getElementById('iNote').value);

    if (!isNaN(input)) {
        if (input >=0 && input <=10) {
            if (input <3) {
                pAlert.innerText = 'decepción';
            } else if (input< 5){
                pAlert.innerText = 'Deja que alguien más lo aproveche';
            }else if (input <= 7){
                pAlert.innerText = 'no esperabamos más';
            }else if (input < 9){
                pAlert.innerText = 'Sobresaliente';
            }else {
                pAlert.innerText = 'Eres un dios';
            }
        } else{
            pAlert.innerText = 'Los números deben estar entre 0 y 10';
        }        
    } else{
        pAlert.innerText = 'Introduce un número';
    } 
}

document.getElementById('btn').addEventListener('click', calculate);


// do {
//     nota = prompt('inserta una nota');
//     if (Number(nota)==nota) {
//         if (nota > 0 && nota <= 10) {
//             if (nota < 3) {
//                 alert('muy deficiente');
//             }else if(nota <5) {
//                 alert('insuficiente');
//             }else if (nota < 7){
//                 alert ('insuficiente');
//             }else if (nota < 9){
//                 alert('notable');
//             }else {
//                 alert ('sobresaliente');
//             }
//         }else{
//             alert('debe introducir entre 0 y 10');
//         }
//     }else{
//         alert('introduce un número porfavor');
//     }
// } while (nota != undefined);
/*0-3 Muy deficiente
3-5 insuficiente
6-7 bien
7-8 notable
9-10 sobresaliente */