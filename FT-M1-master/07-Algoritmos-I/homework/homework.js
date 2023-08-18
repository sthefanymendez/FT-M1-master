'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
let arr = [1]
let div = 2
while(num !== 1){
  if(num%div === 0) {
    arr.push(div)
    num = num / div
  } else div++ 
}
return arr
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // for (let i=0; i < array.length; i++) {
  //   for(let j=0; j < array.length; j++) {
  //     if(array[j] > array[j+1]){
  //       let aux = array[j]
  //       array[j] = array[j+1]
  //       array[j+1] = aux
  //     }
  //   }
  // }
  // return array
  let flag = true;
  while(flag){
    flag  = false
    for(let i=0; i < array.length; i++){
      if(array[i] > array[i+1]){
        let aux = array[i]
        array[i] = array[i+1]
        array[i+1] = aux
        flag = true
      }
    }
  }
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i =  1; i < array.length; i++) {
    let aux = array[i]
    for(let j = 0; j < i; j++){
      if(aux < array[j]){
        aux = array[j]
        array[j] = array[i]
        array[i] = aux
      }
    }
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // for (let i = 0; i < array.length; i++){
  //   let min  = array[i]
  //   let current = i
  //   for(let j = i+1; j < array.length; j++){
  //     if(min = array[j]){
  //       min = array[j]
  //       current = j
  //     }
  //   }
  //   if(current !== i){
  //     array[current] = array[i]
  //     array[i] = min
  //   }
  // }
  // return array
  for (let j = 0; j < array.length-1; j++){
    let min  = j;
    for(let i = j+1; i < array.length; i++){
      if(array[i] < array[min]){
        min = i;
      }
    }
    if(j!== min){
      let aux = array[j];
      array[j] = array[min];
      array[min] = aux;
    }
  }
  return array;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
