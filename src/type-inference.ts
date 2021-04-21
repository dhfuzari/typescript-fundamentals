// Type inference -> Type script recognizes types when it has an explicity declaration. 
(function() {
  let messageOne:string = 'Defined message';
  messageOne = 'New message defined';
  // messageOne = true // messageOne accepts only string values

  window.addEventListener('click', (e) => {
    console.log(e.type);
    // console.log(e.foo); // MouseEvent doesn't have property foo'
  });

  let x = [0,1,null];
  x[0] = 10;
  x[1] = null;
  // x[2] = true; // x accepts only number and null types
})();