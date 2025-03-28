function proximoEnLaFila(arreglo, elemento) {
    // Agrega el elemento al final del arreglo
    arreglo.push(elemento);
  
    // Elimina el primer elemento del arreglo y lo retorna
    return arreglo.shift();
  }
  
  // Ejemplos de uso
  let miArreglo = [1, 2, 3, 4, 5];
  let elementoRemovido = proximoEnLaFila(miArreglo, 6);
  
  console.log("Elemento removido:", elementoRemovido); // Imprime: Elemento removido: 1
  console.log("Arreglo resultante:", miArreglo); // Imprime: Arreglo resultante: [2, 3, 4, 5, 6]