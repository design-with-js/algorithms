/*
Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).
Mainly the following three basic operations are performed in the stack:

Push: Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
Pop: Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.
Peek or Top: Returns top element of stack.
isEmpty: Returns true if stack is empty, else false.
 */

class Stack {
  constructor(maxSize) {
    maxSize = maxSize || 2000;
    let arr = Array();
    this.length = arr.length;
    this.push = x => {
      if (this.length < maxSize) {
        arr.push(x);
        this.length++;
      } else {
        throw "Stack overflow";
      }
    };
    this.pop = () => {
      if (this.length) {
        this.length--;
        return arr.pop();
      } else {
        throw "Stack underflow";
      }
    };
    this.top = () => arr[arr.length - 1];

    this.isEmpty = () => this.length == 0;
  }
}

let s = new Stack(100);

s.push(2);
s.push(2);
s.push(2);
s.push(2);

console.log({ s });

s.pop();

console.log({ s }, s.isEmpty());

module.exports = Stack;
