var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var array = array.unshift(element);
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){

}

/*
In arrays.js, define two functions, addElementToBeginningOfArray and
destructivelyAddElementToBeginningOfArray. Both functions take two parameters,
an array and an element to add to the beginning of the array, and both functions
should add the element to the beginning of the array and then return the whole array.
The destructive function, destructivelyAddElementToBeginningOfArray, should alter the
original array that's passed in; addElementToBeginningOfArray, on the other hand, should
return a new array and not modify the original.
