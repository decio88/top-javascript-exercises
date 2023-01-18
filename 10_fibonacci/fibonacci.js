const fibonacci = function (x) {
  x = +x;
  const fibo = [1];
  if (x <= 0) {
    return "OOPS";
  }

  for (let i = 0; i <= x; i++) {
    let num;
    if (i === 0) {
      num = 1;
    } else {
      num = fibo[i] + fibo[i - 1];
    }

    fibo.push(num);
  }

  return fibo[x - 1];
};

// Do not edit below this line
module.exports = fibonacci;
