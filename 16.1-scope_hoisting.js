// Block 1
function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

// funcA is declared and then invoked.
// var a is  declared with it's name but not initialized before the console.log.
// Therefore "undefined " is printed.
// Function foo it also declared before the console.log , therefore 2 will be printed.

// Block 2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
//At the beginning, fullName and obj are filled with their details.
//the function getFullName is referring to the closest fullName, therefore "Aurelio De Rosa" will be printed.
//after that, test refers to the function inside the object, and we are invoking it in the outermost scope, so it will print
//  the fullName of the outer scope,which is "John Doe".

// Block 3

function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

//a is in the scope of funcB, so outside of funcB it will give an error. typeof error is undefined, so "undefined" will be printed.
//since b is not declared with a type, it's considered a global variable, of type var , and it is seen by the outer scope
//Therefore typeof b will print "number"

// Block 4
function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();

//since function decalarations happen first, funcC will run over funcC, and when they are invoked, only "2" will be printed twice

// Block 5

function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e);

//d has no variable, so it is a global var, and is recognized by the console.log(d);
// therefore, 1 will be printed. var e is defined inside funcD2(), so is not recognized in the outer scope, and error will be printed.

// Block 6

function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
//since
//var f is declared on top. 1 is assigned to f before funcE() is invoked, but after the console.log.
// so the print would be "Value of f in local scope: undefined"
// "Value of f in local scope: 1"
