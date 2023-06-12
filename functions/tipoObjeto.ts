/*a la variable usuario se le esta indicando que su tipo de dato sera un objeto con las propiedades id,name y age. donde id recibe un tipo de dato number, name un string, age un number y en el caso de country se le esta indicando mediante el simbolo ? que puede ser opcional, es decir que si la propiedad country no se proporciona sera undefined, pero si es proporcionada debera ser de tipo string . cuando se les asigna el valor se pueden poner en el orden que sea, ya que esto no es una tupla.*/
let usuario: {
  /*el metodo readonly indica que no se puede modificzrr el valor de esta propiedad*/
  readonly id: number;
  name: string;
  age: number;
  country?: string;
} = { id: 1, name: "brandon", age: 20 };

/*esto da error porque con el metodo readonly se le indicio a TS que el id no puede ser modificado*/
// usuario.id = 2;
