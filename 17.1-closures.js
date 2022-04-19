// Block 1
var b = 1; //5
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9); //otherFunction
var result = firstResult(2);

//When someFunction is invoked, b of the outer scope is seen by the inner function,
//therefore b=5 runs over b=1 in the outer scope.
//also otherFunction is returned and saved in firstResult. When firstResult is invoked, otherFunction is invoked and b=5 is returned
//since b changed to 5, and otherFunction has the scope of someFunction and the global scope as closure

// Block 2

var a = 1;
function b2() {

  a = 10;

  return;
  function a() {}
}
b2();
console.log(a);

//When function b2 is invoked, the function declaration of a is hoisted to the top part of the function.
//afterwards, the local a function is changed to reference 10. then b2 returns nothing.
//On console.log(a), the inner a variable is not visible to the outer scope, so the outer variable a=1 is printed.

// Block 3

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}

//The i in the for loop can "see" the outer scope, therefore it runs over the outer i each time.
//each time it defines the function log and invokes the function setTime out. since setTimeout calls the method log after 100 milliseconds,
//i will already be 3, and then the function log will run three times with the same i, so we will see
//3
//3
//3
