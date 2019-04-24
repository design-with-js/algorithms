let { Node, LinkedList } = require("../LinkedListTemplate");

console.log("========================================");
/**
 * Rotate a given linked-list by k number of nodes counterclockwise (in-place)
 * @param  {LinkedList} ll a non empty list, length > k
 * @param  {number} k  number of nodes to be rotated
 */
function rotate(ll, k) {
  let index = 0;
  let node = ll.head;
  while (index < k - 1 && node) {
    node = node.next;
    index++;
  }
  if (!node) return;

  ll.append(ll.head);
  ll.head = node.next;
  node.next = null;
}

let ll = new LinkedList(new Node(1));

ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);
ll.push(6);
ll.push(7);
ll.push(8);

ll.display();

rotate(ll, 3);

ll.display();
