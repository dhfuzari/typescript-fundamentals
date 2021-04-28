type Todo = { 
  title: string;
  description: string;
  completed: boolean;
}

// *** Readonly type utility: Make all properties in <T> read-only
const todo:Readonly<Todo> = {
  title: 'Watch Stranger Things again',
  description: 'Remember the good times',
  completed: false
};

console.log(todo);
// todo.completed = true; // causes an error. Todo is a Readonly object
console.log(todo);

// *** Partial type utility: Make all properties in <T> optional
function updateTodo(todo:Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo2:Todo = updateTodo(todo, { completed: true });
console.log(todo2);

// *** Pick type utility: From <T>, pick a set of properties whose keys are in the union K
type TodoPreview = Pick<Todo, "title" | "description">

const todo3:TodoPreview = {
  title: 'Advertise the PS3 for sale',
  description: 'Advertise it at OLX'
}

console.log(todo3);

// *** Omit type utility: Construct a type with the properties of <T> except for those in type K.
type TodoOmit = Omit<Todo, "completed">;

const todo4:TodoOmit = {
  title: 'Buy a new bicycle',
  description: 'Choose which bike to buy'
}

console.log(todo4);


