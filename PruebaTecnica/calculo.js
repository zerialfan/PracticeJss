const arr = [1,2,3,4,10]
const newArray = arr.sort((a,b)=> a -b)


function calcularPromedio(arr) {
  const suma = arr.reduce((acc, valor) => acc + valor, 0);
  return suma / arr.length;
}

function calcularMediana(arr) {
  const n = arr.length;
  if (n % 2 === 0) {
    const c1 = n / 2 - 1;
    const c2 = n / 2;
    return (arr[c1] + arr[c2]) / 2;
  } else {
    const p = Math.floor(n / 2);
    return arr[p];
  }
}

function calcularModa(newArray) {
  let frecuencia = newArray.reduce((count, value) => {
    count[value] = (count[value] || 0) + 1;
    return count;
  }, {});

  let moda = [];
  let maxFrecuency = 0;

  for (const key in frecuencia) {
    if (frecuencia[key] > maxFrecuency) {
      moda = [parseInt(key, 10)];
      maxFrecuency = frecuencia[key];
    } else if (frecuencia[key] === maxFrecuency) {
      moda.push(parseInt(key, 10));
    }
  }
  if (moda.length === Object.keys(frecuencia).length) {
    return "no hay moda";
  }
  return moda;
}

const resultado = calcularPromedio(newArray);
const resultadoMediana = calcularMediana(newArray);
const resultadoModa = calcularModa(newArray);
console.log(resultadoMediana, resultado, resultadoModa);