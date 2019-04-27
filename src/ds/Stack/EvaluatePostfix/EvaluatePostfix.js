let Stack = require("../Stack");

console.log("==================================");

let varHash = {
  a: 12,
  b: 13,
  c: 14,
  d: 15,
  e: 16,
  f: 17
};

let ops = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "%": (a, b) => a % b,
  "/": (a, b) => a / b,
  "*": (a, b) => a * b
};

function evaluatePostfix(expression) {
  let s = new Stack(expression.length);
  for (let i = 0; i < expression.length; i++) {
    if (ops[expression[i]]) {
      let operandX = s.pop();
      let operandY = s.pop();
      s.push(ops[expression[i]](operandY, operandX));
    } else {
      s.push(varHash[expression[i]]);
    }
  }
  return s.pop();
}

console.log(evaluatePostfix("ab+"));
