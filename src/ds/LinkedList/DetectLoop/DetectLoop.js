let { Node, LinkedList } = require("../LinkedListTemplate");
console.log("=================================================");

/**
 * detect loop in a linked-list
 * @param  {LinkedList} ll a non empty linked-list
 * @return {boolean}    returns if theres a loop in the linkedlist or not.
 */
function detectLoop(ll) {
  let back = ll.head;
  let front = back.next;

  while (back != front && front) {
    back = back.next;
    front = front.next.next;
  }

  if (back == front) return true;
  else return false;
}

let ll = new LinkedList(new Node(1));
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);

console.log(detectLoop(ll));
ll.end().next = ll.head.next.next;
console.log(detectLoop(ll));

module.exports = detectLoop;

// ll.display();
