/*arreglo que recibe tipado de strings, si se le pasa otro tipo de dato marcara error*/
const animals: string[] = ["dog", "cat", "lion"];

/*arreglo que recibe tipado numbers, si se le pasa otro tipo de dato marcara error*/
const numeros: number[] = [1, 2, 3, 4, 5];

/*si inicializamos el arreglo de la siguiente manera, TS detectara que ese arreglo puede recibir cualquier tipo de dato*/

const heroes = [1, "bra", true, null];

/*se tiene otra alternativa que nos provee TS para poder definir el tipo de dato arreglo, en este ejemplo se hace uso del metodo Array que dentro del <> se le indica el tipo de dato que aceptara el arreglo players*/

let players: Array<string> = ["bra", "dan"];
