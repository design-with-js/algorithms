let { LinkedList, Node } = require("../LinkedListTemplate");

/**
 * Writing a function mergeSortedLists to merge two given sorted lists and return the combined sorted list
 * @param  {Node} headX First non empty sorted list's head
 * @param  {Node} headY Second non empty sorted list's head
 * @return {Node}       Combined sorted list's head
 */
function mergeSortedLists(headX, headY) {
  let nodeX = headX,
    nodeY = headY;
  /**
   * making a new list that is going to store the result
   */
  listZ = new LinkedList(new Node(-1));
  nodeZ = listZ.head;

  while (nodeX && nodeY) {
    if (nodeX.value < nodeY.value) {
      // nodeZ.next = nodeX;
      nodeZ.next = new Node(nodeX.value);
      nodeX = nodeX.next;
    } else {
      // nodeZ.next = nodeY;
      nodeZ.next = new Node(nodeY.value);
      nodeY = nodeY.next;
    }
    nodeZ = nodeZ.next;
  }
  if (nodeX) {
    nodeZ.next = nodeX;
  } else if (nodeY) {
    nodeZ.next = nodeY;
  }

  listZ.deleteByPosition(0);
  return listZ.head;
}

let ll1 = new LinkedList(new Node(1));

let ll2 = new LinkedList(new Node(2));

ll1.push(3);
ll1.push(5);
ll1.push(7);
ll1.push(9);
ll1.push(11);
ll1.push(13);

ll2.push(4);
ll2.push(6);
ll2.push(8);
console.log("\n\nmerging:");
ll1.display();
ll2.display();
head3 = mergeSortedLists(ll1.head, ll2.head);
console.log("result:")
head3.toList().display();

module.exports = mergeSortedLists;
