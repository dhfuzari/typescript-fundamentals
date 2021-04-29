// @Component
// @Selector
// @useState("lorem")

// *** Factory Example(Class decorator) 
console.log("\n\n 🚀 ~ file: decorators.ts ~ line 6 ~ // *** Factory")

// Class decorator
function loggerDecorator(prefix: string) {
  return (target: Function) => {
    console.log(`${prefix} - ${target}`);
  }
}

@loggerDecorator('awesome')
class Foo {}

// *** Class decorator
console.log("\n\n 🚀 ~ file: decorators.ts ~ line 16 ~ // *** Class decorator")

// Class decorator definition
function setApiVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    }
  }
}

@setApiVersion("1.0.0")
class Api {}

const nodeApi = new Api();
console.log(nodeApi);


// *** Property decorator
console.log("\n\n 🚀 ~ file: decorators.ts ~ line 35 ~ // *** Property decorator")

// Property decorator definition
function minLength(length: number) {
  return(target: any, key: string) => {
    let val = target[key];
    const getter = () => val;
    const setter = (value: string) => { 
      if(value.length < length) {
        console.log(`Error - You can't create ${key} with less than ${length} characters.`)
      } else {
        val = value
      }
     }
     Object.defineProperty(target, key, {
       get: getter,
       set: setter
     });
  }
}

class Movie {
  // Validation - it can't contain less than 5 letters
  @minLength(5)
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const movie = new Movie('Interstellar');
console.log(movie.title);

// Method decorator
console.log("\n\n 🚀 ~ file: decorators.ts ~ line 71 ~ // Method decorator")

// Method decorator definition

function delay(ms: number) {
  return (target: Object, key: string, descriptor: PropertyDescriptor) => { 
    console.log(target);
    console.log(key);
    console.log(descriptor);
    console.log(ms);

    const originalMethod = descriptor.value;
    descriptor.value = function(...args) {
      setTimeout(() => {
        originalMethod.apply(this, args)
      }, ms);
      return descriptor;
    }
  }
};

class Greeter {
  greeting: string;

  constructor(greeting: string) {
    this.greeting = greeting;
  }

  // Wait some time(ms) and then run the method
  @delay(3000)
  greet() {
    console.log(`Hello! ${this.greeting}`);
  }
}

const smallPeople = new Greeter('Small people');
smallPeople.greet();