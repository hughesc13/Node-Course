"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateFibonacci = generateFibonacci;
exports.sayHello = sayHello;
// 1 1 2 3 5 8 13 21

function sayHello() {
  console.log('hey');
}
function generateFibonacci(howMany) {
  //export exports function as named
  var x = 1;
  var y = 1;
  var sequence = [x, y]; //array called sequence containing x and y

  //create an array w howMany elements in it
  Array(howMany).fill().forEach(function () {
    var sum = x + y;
    sequence.push(sum);
    x = y;
    y = sum;
  });
  return sequence;
}
//module.exports.generateFibonacci = generateFibonacci;
//a named export! the name is generateFibonacci

//export default generateFibonacci;