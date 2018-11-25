/*
Quiz yourself: what do you need to know about prototypal?
.
.
.
.

You have a separate methods object.
In the contructor, create a new object equal to Object.create(methodsObj);
After defining your properties, return the obj at the end

Also, don't use 'new'
and don't use fat arrow funcs!

In summary:
Object.create, return the obj, methods is just an obj, no fat arrows, don't use new
*/

const Rectangle = function (length, width) {
  let obj = Object.create(RectangleMethods);

  obj.length = length;
  obj.width = width;
  
  return obj;
}

const RectangleMethods = {
  getArea: function () {
    return this.length * this.width;
  },
  get area() {
    return this.length * this.width;
  },
  setArea: function (x, y) {
    this.length = x;
    this.width = y
  }
}

let x = Rectangle(2,3);
console.log(x.getArea());
console.log(x.area)
x.setArea(4,5);
console.log(x.getArea());
console.log(x.area)