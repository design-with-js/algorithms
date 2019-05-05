let Stack = require("../Stack");

console.log("===============================");

function reverse(str) {
  let s = new Stack();
  for(let i = 0; i < str.length; i++) {
    s.push(str[i]);
  }
  str = "";
  while(!s.isEmpty()) {
    str += s.pop();
  }
  return str;
}

let str = "shubham"
console.log(reverse(str));

console.log(str);