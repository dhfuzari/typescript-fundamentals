// boolean: true/false
let isOpen: boolean;
isOpen = true;
isOpen = false;

// string: 'foo'/"foo"/`foo`
let message: string;
message = 'foo';
message = "foo";
message = `foo`;

// number: int/float/hex/binary
let total: number;
total = 150;
total = 15.90;
total = 0xff0;
total = 0b110;

// array: type[]
let items: number[];
items = [1];
items.push(2);
items.push(3);

// array: Array<type>
let collection: Array<number>;
collection = [1,2,3];
collection.push(4);
collection.push(5);

// tuple: [type, type, type, ...] - Defined number of items with respective types and positions
let types: [number, string, string, boolean];
types = [1, 'foo', 'bar', false];
types[0] = 2;
types[1] = 'bar';
types[2] = 'foo';
types[3] = true;
types.push(2);
types.push('foo bar');
types.push(true);
types.push(5);

// enum: 
enum Colors {
  white = "#fff",
  black = "#000"
};

// any: Any type, anything. It's use is not advisable. It doesn't make sense to use any type when you use typescript.
let thing: any;
thing = "string";
thing = true;
thing = 1000;

// void: Empty 
function logger(): void {
  console.log('foo');
}

// null | undefined
type undefinedString = string | undefined; // type alias
type nullableBoolean = boolean | null; // type alias 
const myString:undefinedString = 'abcde';
const myBoolean:nullableBoolean = false;

// never -  A type tha never occurs
function error(message: string): never {
  throw new Error(message);
}

// object 
let cart: object;
cart = {
  color: "#f5af00",
  electric: false
};