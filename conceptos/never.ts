/*Never se utiliza para representar valores que nunca ocurren, es utilizado para describir funciones que nunca retornan un valor correctamente, ejemplo, esta funcion no retorna ningun valor, por lo que no se puede hacer uso de "return message" porque dara error. en el never nunca va a terminar de ejecutarse la funcion.*/

const error = (message: string): never => {
  throw new Error(message);
};
