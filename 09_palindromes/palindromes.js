// const palindromes = (sentence) =>
//   sentence
//     .toLowerCase()
//     .replace(/[^a-zA-Z0-9 ]/g, "")
//     .split("")
//     .reverse()
//     .join("") === sentence;

const palindromes = function (sentence) {
  let clean = sentence.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return clean.split("").reverse().join("") === clean;
};

// Do not edit below this line
module.exports = palindromes;
