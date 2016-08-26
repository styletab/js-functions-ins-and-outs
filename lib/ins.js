'use strict';

const product = function () {
let result = 1;

for(let i = 0; i < arguments.length; i++) {
  result *= result * arguments[i];
}

return result;
};

const max = function () {
let result = 0;

for (let i = 0; i < arguments.length; i++) {
  if(arguments[i] > result) {
    result = arguments[i];
  }
    }

return result;

};
// how to make argument say 'array' instead of copying in the array? to call
// this have to declare what the argument is first and then call the function.
const arrayTimes = function (array) {
let result = 0;

for (let i = 0; i < array.length; i++) {
  if(array[i] > result) {
    result = array[i];
  }
}
return result;
};

// take an array and return a new array with values inside multiplied by 2
const arrayTimes2 = function (array) {
  // arguments[]
  let doubledArray = []; //<-- this is creating an empty array that will house the
  // new mutiplied values.
  for (let i = 0; i < array.length; i++) {
    doubledArray[i] = array[i] * 2;
  }

  return doubledArray;
};

// this function takes an object and adds a prop to it
const addProperty = function (obj, prop, val) {
  obj[prop] = val;
// obj.prop would not be valid here bc it would return prop: 12 instead of age:12
};
// to set the object that we'll use the addProperty function on
let alexK = {name: 'Alex', lastName: 'Not Beers'};

// this function takes a value, a predicate callback & a mutator callback
// USE CASE: we'll take an array of heights that are in cm and inches and go
//go  through that array to convert the cm heights to inches
const arrayTransform = function (array, predicate, mutator) {
  //if calling predicate with a value as arugment == true
  // call mutator with value as argument
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if(predicate(array[i])){
      result.push(mutator(array[i]));
    }

  else {
    result.push(array[i]);
  }
}
  return result; //<-- when starting from square one, best practice is to define
  // and return the result
};

// predicate
const isCentimeters = function(height) {
  if (height >= 100) {
    return true;
  }
  else {
    return false;
  }
};

//mutator
const convertCmToIn = function(val){
  return val * 0.39;

};

//USE CASE:  Extract evens from an array and double them

const isEven = function(val) {
  if(val % 2 === 0) {
    return true;
  }

};

const double = function (val) {
  return val * 2;

};

module.exports = {
  product,
  max,
  arrayTimes2,
  addProperty,
  transform,
};
