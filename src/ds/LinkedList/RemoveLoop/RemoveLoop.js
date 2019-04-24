let { Node, LinkedList } = require("../LinkedListTemplate");
let detectLoop = require("../DetectLoop/DetectLoop");

console.log("=================================================");
/**
 * Detects and removes if there exists a loop in a given linked-list (in-place)
 * @param  {LinkedList} ll non empty linked list that might contain a loop
 */
function removeLoop(ll) {
  let back = ll.head;
  let front = ll.head.next;
  while (front != back && front) {
    back = back.next;
    front = front.next.next;
  }

  if (!front) {
    return;
  }

  let node = front.next,
    len = 0;
  while (node != front) {
    node = node.next;
    len++;
  }
  // len means the length of the loop
  let index = 0;
  front = ll.head;
  while (index < len) {
    front = front.next;
    index++;
  }
  back = ll.head;
  while (front.next != back) {
    front = front.next;
    back = back.next;
  }

  front.next = null;
}

let ll = new LinkedList(new Node(1));
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);

// console.log(detectLoop(ll));
ll.end().next = ll.head.next.next;
console.log(detectLoop(ll));
removeLoop(ll);
console.log(detectLoop(ll));
ll.display();

