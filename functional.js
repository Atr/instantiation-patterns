const Rectangle = function(length, width) {

  let instance = {};

  // In a different class - say a stack - you might declare here a 'storage' object in closure...
  // ...that you add to and remove from.

  instance.width = width;
  instance.length = length;

  instance.getArea = function() {
    return instance.width * instance.length;
  }

  instance.setArea = function(length, width) {
    instance.length = length;
    instance.width = width;
  }

  return instance;
}