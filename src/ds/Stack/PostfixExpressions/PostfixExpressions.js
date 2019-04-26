let Stack = require("../Stack");


console.log("====================================\n\n\n")
function postFix(expression) {
  let opStack = new Stack();
  ops = {
    "+": 4,
    "-": 5,
    "%": 1,
    "/": 2,
    "*": 3
  };
  let postExp = "";
  for (let i = 0; i < expression.length; i++) {
    if (ops[expression[i]]) {
      if (opStack.isEmpty() || ops[opStack.top()] > ops[expression[i]]) {
      } else {
        while (!opStack.isEmpty()) {
          postExp += opStack.pop();
        }
      }
      opStack.push(expression[i]);
    } else {
      postExp += expression[i];
    }
  }
  while (!opStack.isEmpty()) {
    postExp += opStack.pop();
  }
  // console.log({opStack}, opStack.isEmpty())
  return postExp;
}

console.log(postFix("a+b*c+d%m-2"));
