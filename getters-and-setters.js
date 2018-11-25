/*

A 'getter' is a method on an object that doesn't have to be instantiated to be called
Its syntax looks like: get functionName () { ... },
It leverages the 'this' keyword to return properties already found on that object
To call it, write obj.methodname without an instantiation

A 'setter' is the same thing - only it'll set values on your object
Its syntax looks like: set functionName (args) {}
It leverages the 'this' keyword to replace current object properties with the arguments
To call it, write obj.methodname = 'new value'
(note: setter can only take one param

*/

let person = {
  firstName: 'Alex',
  lastName: 'Texas',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  set name(newName) {
    const nameArr = newName.split(' ');
    this.firstName = nameArr[0];
    this.lastName = nameArr[1];
  },
}

console.log(person.name);
person.name = "Alex Englefield";
console.log(person.name);