const Rectangle = function(length, width) {

  let instance = {length, width};

  // In a different class - say a stack - you might declare here a 'storage' object in closure...
  // ...that you add to and remove from.

  extend(instance, RecMethods);
  return instance;
}

const RecMethods = {
  getArea: function() {
    return this.width * this.length;
  },
  setArea: function(length, width) {
    this.length = length;
    this.width = width;
  },
};

// Helper function:
const extend = (obj, methods) => {
  for (var key in methods) {
    obj[key] = methods[key];
  }
}