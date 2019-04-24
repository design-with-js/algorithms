let { Node, LinkedList } = require("../LinkedListTemplate");

console.log("=====================================================");
/**
 * Writing a function to reverse group of given size k inside the given linked-list
 * This is done recursively
 * @param  {LinkedList}  linked-list that needs to be reversed
 * @param  {Number} k    size of the group that needs to be reversed
 */
function reverseGroup(list, k) {
  let index = 0,
    node = list.head;
  while (index < k - 1 && node.next) {
    node = node.next;
    index++;
  }
  let nextHead = node.next,
    head;
  node.next = null;
  list.reverse();
  if (nextHead) {
    head = reverseGroup(nextHead.toList(), k);
  }
  list.end().next = head;
  return list.head;
}

ll = new LinkedList(new Node(1));
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);
ll.push(6);
ll.push(7);
ll.push(8);

ll.display();
reverseGroup(ll, 2);
// .toList()
// .display();
ll.display();
