var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  return [...element, array]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
/*
Define two more functions, addElementToEndOfArray and destructivelyAddElementToEndOfArray.
These functions also take two arguments, an array and an element to add to the end of the array. 
addElementToEndOfArray should not alter the original array; destructivelyAddElementToEndOfArray should 
alter the original array.
*/