/*Esta funcion toma 2 parametros de tipo number (a,b) y devuelve un valor de tipo number. Si se le indica que retorne un string, dara error ya que los 2 parametros que esta recibiendo son de tipo number. */
const sumar = (a: number, b: number): number => {
  return a + b;
};

/*Cabe recalcar, que las funciones no tienen inferencia, por ejemplo si una funcion recibe 2 parametros sin tipado, TS no va a detectar que los parametros son de tipo number, por lo que se quejara.*/

const restar = (n1, n2) => {
  return n1 - n2;
};
