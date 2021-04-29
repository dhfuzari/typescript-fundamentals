/**
 * Class decorator 
 * When you attach a function to a class as a decorator, you’ll receive the class constructor as the first parameter.
 */
 console.log("\n\n 🚀 ~ file: types-of-decorators.ts ~ Class Decorator");

const classDecorator = (target: Function) => {
  // Do something with your class
  console.log(target);
}

@classDecorator
class Rocket {}


/**
 * Class decorator 
 * If you want to override the properties within the class, you can return a new class that extends its constructor 
 * and set the properties  
 */
 console.log("\n\n 🚀 ~ file: types-of-decorators.ts ~ Class Decorator");

const addFuelToRocket = (target: Function) => {
  return class extends target {
    fuel = 100
  }
}

@addFuelToRocket
class SpaceXRocket {}
const redRocket = new SpaceXRocket();
console.log("redRocket: ", redRocket)


/**
 * Method decorator
 * Another good place to attach a decorator is the class method. Here you're getting three parameters in your 
 * function: "target", "propertyKey", and "descriptor"
 */
console.log("\n\n 🚀 ~ file: types-of-decorators.ts ~ Method Decorator");

const methodDecorator = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
  console.log('target: ', target);
  console.log('propertyKey: ', propertyKey);
  console.log('descriptor: ', descriptor);
}

class NasaRocket {
  @methodDecorator
  launch() {
    console.log('Launching rocket in 3... 2... 1.... 🚀');
  }
}

const blueRocket = new NasaRocket();
blueRocket.launch();


/**
 * Property decorator
 * Just like the method decorator, you'll get the target and propertyKey parameter. the only difference is that you 
 * don't get the property descriptor
 */
console.log("\n\n 🚀 ~ file: types-of-decorators.ts ~ Property Decorator");

const propertyDecorator = (target: Object, propertyKey: string) => {
  console.log('target: ', target);
  console.log('propertyKey: ', propertyKey);
}

class SputnikRocket {
  @propertyDecorator
  fuelLevel: number

  constructor(fuelLevel: number) {
    this.fuelLevel = fuelLevel;
  }
}



