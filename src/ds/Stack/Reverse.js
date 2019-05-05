let Stack = require("./Stack");

console.log("=============================");

function reverse(stack) {
  if (stack.isEmpty()) {
    return stack;
  }

  let top = stack.pop();

  reverse(stack);
  insertAtBack(stack, top);
}

function insertAtBack(stack, x) {
  if (stack.isEmpty()) {
    stack.push(x);
  } else {
    let a = stack.pop();
    insertAtBack(stack, x);
    stack.push(a);
  }
}

let s = new Stack();

s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);

s.display();

reverse(s);

s.display();
