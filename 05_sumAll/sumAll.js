const sumAll = function (x, y) {
  if (x < 0 || y < 0 || typeof x != "number" || typeof y != "number") {
    return "ERROR";
  }
  let result = Math.min(x, y);
  for (let i = Math.min(x, y); i <= Math.max(x, y); i++) {
    result += i;
  }
  return result - 1;
};

// Do not edit below this line
module.exports = sumAll;
