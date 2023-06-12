/*se define un tipo Hero utilizando un tipo de objeto, el tipo Hero tiene 3 propiedades*/
type Hero = {
  name: string;
  age: number;
  isActive: boolean;
};

/*se declara una variable hero que es del tipo Hero que es un objeto y se le asigna un objeto con las propiedades y valores correspondientes*/
let hero: Hero = {
  name: "spiderman",
  age: 30,
  isActive: true,
};

/*esta funcion tiene un parametro hero de tipo Hero y devuelve un valor del mismo tipo Hero.*/
function createHero(hero: Hero): Hero {
  /*se destructura el objeto hero para obtener sus propiedades*/
  const { name, age, isActive } = hero;
  /*se crea un nuevo objeto con esas propiedades y se retorna*/
  return { name, age, isActive };
}

createHero({ name: "spiderman", age: 40, isActive: false });
