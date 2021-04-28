// Generics enable the facilities to define more than one type, but in the other hand, 
// after defined a specific type, you can't change it anymore

// Optional patterns to follow
// S => State
// T => Type
// K => Key
// V => Value
// E => Element 

// <S extends number | string> -> Defines a generic type to useState and
// <S extends number | string = string> -> Defines string as default type

type StateType = number | string

function useState<S extends StateType = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return {
    getState,
    setState
  };
}

// String is the default type, so you don't need specify string as type
const newStateString = useState()
newStateString.setState('foo'); 
console.log(newStateString.getState());

const newStateNumber = useState<number>();
newStateNumber.setState(123);
console.log(newStateNumber.getState());

const newStateBoolean = useState<boolean>()  // causes an error
newStateBoolean.setState(true);
console.log(newStateBoolean.getState());
 