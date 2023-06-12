/*primer forma de tipar funciones, en este ejemplo al objeto lo tipamos con : y le indicamos el tipo de variable que recibira ese objeto, name recibira unicamente strings y age numeros.*/

// function saludar({ name, age }: { name: string; age: number }) {
//   console.log(`${name} tienes ${age} años`);
// }

/*La segunda forma, es asignar un parametro (persona) y que ese mismo reciba un tipado que es un objeto con las propiedades y el tipado que se requiera, ejemplo, esta funcion recibe un parametro personas, personas es un valor de tipo objeto con 2 propiedades name y age que se les especifica su respectivo tipado.*/

// function saludar(persona: { name: string; age: number }) {
//   const { name, age } =
//     persona; /*si se hace de esta manera, se tienen que destructurar name y age de persona */
//   console.log(`${name} tienes ${age} años`);
// }
