var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array, element) {
  var newArray = [element,...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
    var secondArray = array.unshift(element);
    return secondArray;
}

function addElementToEndOfArray (array, element) {
  var thirdArray = [...array, element];
  return thirdArray;
}

function destructivelyAddElementToEndOfArray (array, element) {
    var fourthArray = array.push(element);
    return fourthArray;
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
    var fifthArray = array.shift();
    return fifthArray;
}

function removeElementFromBeginningOfArray (array) {
  var sixthArray = array.slice(1);
  return sixthArray;
}

function destructivelyRemoveElementFromEndOfArray (array) {
    var seventhArray = array.pop();
    return seventhArray;
}

function removeElementFromEndOfArray (array) {
    var eighthArray = array.slice(0, array.length - 1);
    return eighthArray;
}

