/*No es necesario que le indiquemos a TS el tipo de dato a cada una de nuestras variables siempre y cuando esten inicializadas, ya que TS va a detectar que tipo de dato son  */

/*TS detecta que esta variable es de tipo string*/
let namePlayer = "Brandon";

/*Si queremos reasignar el valor de namePlayer con otro tipo de dato que no sea string, marcara error ya que cuando se inicializo la variable TS la detecto como tipo string*/
namePlayer = "sonia";

/*si dejamos una variable sin inicializar, se le podra pasar cualquier tipo de dato a la misma, ya que al no inicializarla, TS detecta el tipo any, que se refiera a que no tiene ningun tipo, ejemplo:*/

let edad;
edad = 19;
edad = "bra";

/*es por eso que se le tiene que especificar el tipo de dato o inicializar la variable, en el siguiente ejemplo. la variable team no se inicializa pero se le asigna un tipo de dato string:*/

let team: string;
team = "america";
