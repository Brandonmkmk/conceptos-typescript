/*void se utiliza en funciones que no devuelven un valor. indica que la funcion no tiene un valor de retorno especifico. esto se puede entender como que la funcion devuelve "nada", en este ejemplo la funcion no retorna nada, en la variable resulta esta la suma de los parametros a + b, y despues en el console.log se imprime ese result. es decir, la funcion esta retornando "nada". en conclusion void no puede retornar nada.*/
const add = (a: number, b: number): void => {
  const result = a + b;
  console.log(`el resultado es: ${result}`);
};
