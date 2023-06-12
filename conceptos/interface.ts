/*interface es una forma de definir la estructura de un objeto. Se utiliza para declarar que propiedades y metodos debe tener un objeto. en este ejemplo hemos declarado una interfaz llamada Persona que especifica que un objeto que implemente esta interfaz debe tener las propiedades nombre y edad:*/

interface Persona {
  nombre: string;
  edad: number;
}

/*la variable tempPersona se declara como del tipo Persona que es una interfaz, lo que significa que debe tener esa estructura, osea las propiedades nombre y edad que se especifican*/
const tempPersona: Persona = {
  nombre: "Brandon",
  edad: 20,
};

/*Las interfaces se pueden utilizar para definir tipos personalizados y luego se pueden usar como anotaciones de tipos de variables, parametros de funcion o como parte de otras interfaces o clases, ejemplo, esta funcion recibe una parametro llamada persona, que este mismo hara uso de la interfaz Persona y podra acceder a sus propiedades o metodos, es por eso que si queremos acceder a sus propiedades tendria que ser asi: persona.propiedad.*/
function imprimirPersona(persona: Persona) {
  console.log(`Hola ${persona.nombre} tienes ${persona.edad}`);
}

imprimirPersona(tempPersona);
