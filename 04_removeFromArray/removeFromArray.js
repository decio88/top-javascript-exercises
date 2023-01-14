const removeFromArray = function (array, x, y, z, a) {
  for (let i = 0; i < array.length; ) {
    let element = array[i];
    if (element === x || element === y || element === z || element === a) {
      array.splice(array.indexOf(element), 1);
    } else {
      i++;
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
