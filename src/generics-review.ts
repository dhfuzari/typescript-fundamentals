// Type union
export const useStateTypeUnion = () => {
  let state: number | string;

  function getState() {
    return state;
  }

  function setState(newState: number | string) {
    state = newState;
  }

  return { getState, setState };
};

const carStateTypeUnion = useStateTypeUnion();
carStateTypeUnion.setState('Fiat Ram cd 2022');
console.log(carStateTypeUnion.getState());

const ageStateTypeUnion = useStateTypeUnion();
ageStateTypeUnion.setState(38);
console.log(ageStateTypeUnion.getState());
ageStateTypeUnion.setState('Fiat strada cd 2022');
console.log(ageStateTypeUnion.getState());


// Generics
type numOrStr = number | string

function useStateGenerics<S extends numOrStr = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
};

const carState = useStateGenerics();
carState.setState('Fiat Ram cd 2022');
console.log(carState.getState());

const ageState = useStateGenerics<number>();
ageState.setState(10);
console.log(ageState.getState());
// ageState.setState('Fiat strada cd 2022');
// console.log(ageState.getState());

function identity<T, U>(value: T, message: U): T {
  console.log(value, message);
  return value;
}

console.log(identity<Number, String>(1, "lorem"));
console.log(identity<String, String>('abc', "ipsum"));
console.log(identity<Boolean, String>(true, "dolor"));


interface GenericInterface<U> {
  value: U;
  getIdentity: () => U;
}

class IdentityClass<T> implements GenericInterface<T> {
  value: T;

  constructor(value: T) {
    this.value = value
  }

  getIdentity(): T {
    return this.value
  }
}

const myNumberClass = new IdentityClass<Number>(101);
console.log(myNumberClass.getIdentity());

const myStringClass = new IdentityClass<String>('Hello World!');
console.log(myStringClass.getIdentity());


class Car {
  label: String = 'Generic Car';
  numWheels: Number = 4;

  horn() {
    return "beep bepp!";
  }
}

class Truck extends Car {
  label = 'Truck';
  numWheels = 18;
}

class Vespa extends Car {
  label = 'Vespa';
  numWheels = 2;
}

function washCar<T extends Car>(car: T): T {
  console.log(`Received a ${car.label} in the car wash`);
  console.log(`Cleaning all ${car.numWheels} tires`);
  console.log('Beeping horn -', car.horn());
  console.log('Returning your car now');
  return car;
}

const myVespa = new Vespa();
washCar<Vespa>(myVespa);

const myTruck = new Truck();
washCar<Truck>(myTruck);