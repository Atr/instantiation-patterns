// ABOVE ALL - be careful about using arrow functions with instantiation and subclassing

//////////////////////////////////////////////////////////////////////////////////////////
// Object.create:
//////////////////////////////////////////////////////////////////////////////////////////
//
// ***ONLY CREATES SHALLOW COPIES***
// ***DOES NOT CREATE DELEGATION RELATIONSHIP***




//////////////////////////////////////////////////////////////////////////////////////////
// Object.assign:
//////////////////////////////////////////////////////////////////////////////////////////
//
// ***ONLY CREATES SHALLOW COPIES***
// ***DOES NOT CREATE DELEGATION RELATIONSHIP***
// Object.assign takes a target obj, then as many other objects spread by commas
// returns a new object 

const object1 = {
  a: 1,
  b: 2,
  c: 3
};

const object3 = {
  f: 14,
}

const object2 = Object.assign({hello: 'object'}, object1, object3);

object1.a = 1000;

console.log(object2);