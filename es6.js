/*
Quiz yourself: what do you need to know about es6 instantiation?
Follow-up: what does subclassing look like in es6?
.
.
.
.

ES6:
Takes prototypal instantiation and abstracts away the 'object.create' and 'return obj'
In exchange, you need to use the 'this' keyword
And you add your methods to the prototype, like:
  CLASSNAME.prototype.METHODNAME = function (...args) { ... }

Also, don't use fat arrows!  You'll lose 'this' binding

In summary:
'new' means you leave out object.create and returning the obj
classname.prototype.methodname
don't use new
*/

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  
  getArea() {
    return this.length * this.width;
  }

  setArea(length, width) {
    this.length = length;
    this.width = width;
  }
}

class Square extends Rectangle {
  constructor(length, width, color) {
    super (length, width);
    this.color = color;
  }
}

let x = new Rectangle(2,3);
console.log(x.getArea());
x.setArea(4, 5);
console.log(x.getArea());

let z = new Square(2,3);
console.log(z);

console.log(z.constructor);