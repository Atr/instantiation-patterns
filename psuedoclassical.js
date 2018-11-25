/*
Quiz yourself: what do you need to know about psuedoclassical?
Follow-up: what does subclassing look like in psuedoclassical?
.
.
.
.

Abstracts away the 'object.create' and 'return obj' parts of prototypal
In exchange, you need to use 'this'
And you add your methods to the prototype, like:
  CLASSNAME.prototype.METHODNAME = function (...args) { ... }

Also, don't use fat arrows!  You'll lose this binding

In summary:
'new' means you leave out object.create and returning the obj
classname.prototype.methodname
don't use new
*/

const Rectangle = function (length, width) {
  this.length = length;
  this.width = width;
}

const ColorRectangle = function (length, width, color) {
  Rectangle.call(this, length, width);
  this.color = color;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

Rectangle.prototype.setArea = function(x, y) {
  this.length = x;
  this.width = y;
};


let x = new Rectangle(2,3);
console.log(x.getArea());
x.setArea(4, 5);
console.log(x.getArea());
console.log(x.hasOwnProperty('getArea'));

let z = new ColorRectangle (2,3, 'red');
console.log(z);