const repeatString = function (string, num) {
  let stringa = "";
  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      stringa += string;
    }
  }

  return stringa;
};

// Do not edit below this line
module.exports = repeatString;
