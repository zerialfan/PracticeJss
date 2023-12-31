const PlatziMath = {};


PlatziMath.calcularPromedio = function calcularPromedio(arr) {
  const suma = arr.reduce((acc, valor) => acc + valor, 0);
  return suma / arr.length;
};

PlatziMath.calcularMediana = function calcularMediana(arr) {
  const n = arr.length;
  const newArray = arr.slice().sort((a, b) => a - b); // Crear una copia ordenada del array original

  if (n % 2 === 0) {
    const c1 = n / 2 - 1;
    const c2 = n / 2;
    return (newArray[c1] + newArray[c2]) / 2;
  } else {
    const p = Math.floor(n / 2);
    return newArray[p];
  }
};

PlatziMath.calcularModa = function calcularModa(arr) {
  let frecuencia = arr.reduce((count, value) => {
    count[value] = (count[value] || 0) + 1;
    return count;
  }, {});

  let moda = [];
  let maxFrecuencia = 0;

  for (const key in frecuencia) {
    if (frecuencia[key] > maxFrecuencia) {
      moda = [parseInt(key, 10)];
      maxFrecuencia = frecuencia[key];
    } else if (frecuencia[key] === maxFrecuencia) {
      moda.push(parseInt(key, 10));
    }
  }
  if (moda.length === Object.keys(frecuencia).length) {
    return "no hay moda";
  }
  return moda;
};

// PlatziMath.calcularSalario = function calcularSalario(arr) {
// Salario futuro = promedio del salario actual x (1 + tasa de crecimiento)^Años
//     const promedio = PlatziMath.calcularPromedio(arr)
//     const crecimiento =  newArray[0]
// }
