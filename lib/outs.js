'use strict';

const createArray = function (arg) {
  let result = [];
  for (let i = 0; i < arg.length; i++) {
    result[i] = (arg[i]);
  }

  return result;
};

const transform = function (value, predicate, mutator) {
  let result = [];
    if(predicate(value)){
      return (mutator(value));
    }

  else {
    return value;
    }
}
};

// calculateAge accepts one argument that must be a date object
const calculateAge = function(bornOn){
  let today = new Date();
  let age = today - bornOn;
  age = Math.floor((today-bornOn) / (1000*60*60*24*365.25));

  return age;

};

const createPerson = function (givenName, surname, bornOn, height, weight, eyeColor) {
  let result = {};
    result.name = givenName + ' ' + surname; // <-- this will result with 'name:
    //first and last name' we're declaring a new property with '.'
    result.age = calculateAge(bornOn);

  return result;
};


const memoFactory = function (note) {
  let memo = note;

  return function () {
    return memo;
  };
};

// CASUE USE: Creates a function within a function that counts by 1
const counterFactory = function () {

  let count = 0;

  return function () {
    return count += 1;
  }
/// to call this let cupsOfCoffee = counterFactory(); cupsOfCoffee();
};

module.exports = {
  createArray,
  arrayTransform,
  createPerson,
  memoFactory,
  counterFactory,
};
