class Node {
  /**
   * Node of a linked list has a value and a next which points to next node
   * @param  {number}   value A numeric value for simplistic case
   * @param  {any} [next=null]  next stores the value of next node, default value is null
   */
  constructor(value, next = null) {
    this.next = next;
    this.value = value;
  }
}

class LinkedList {
  /**
   * Linked-list class which only exposes its Head pointer with the following:
   * Supports insert at start, end, and middle
   * Supports deletion of a node, node by value, node by index
   * Determining length of linked list
   * Modifying head pointer of a linked list
   * Swap nodes
   * @param {Node} node Head node for the initialisation of Linked-list
   */
  constructor(node) {
    this.head = node;
  }

  /**
   * Push the given value at the end of the linked-list
   * @param  {Number} value Integer
   * @return {Number}       returns the same integer
   */
  push(value) {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    let newNode = new Node(value);
    node.next = newNode;
    return value;
  }

  /**
   * Append node at the end of the list
   * @param  {Node} node A non empty node to be inserted
   */
  append(node) {
    if (this.head) {
      let iterator = this.head;
      while (iterator.next) {
        iterator = iterator.next;
      }
      iterator.next = node;
    } else {
      this.head = node;
    }
  }

  /**
   * Prepend a node at the start of the list
   * @param {Node!} node A non empty node to be inserted
   */
  prepend(node) {
    node.next = this.head;
    this.head = node;
  }

  /**
   * Insert a node at a given node from the linked-list
   * @param  {Node!} atNode Any node from the linked-list
   * @param  {Node!} node   A non empty node to be inserted
   */
  insertAt(atNode, node) {
    node.next = atNode.next;
    atNode.next = node;
  }

  /**
   * Deletion of the given node from Linked-list
   * @param  {Node!} node Any node from the given linked list
   * @return {number}      After deletion returns the same value
   */
  delete(node) {
    let iterator = this.head,
      value = node.value;
    while (iterator.next && iterator.next != node) {
      iterator = iterator.next;
    }
    iterator.next = node.next;
    return value;
  }

  /**
   * Deletion of a node from Lined-List by given value
   * @param  {number!} value A value that needs to be removed from Linked Linked-list
   * @return {number}       After deletion returns that value
   */
  deleteByVal(value) {
    let iterator = this.head,
      node;
    while (iterator.next && iterator.next.value != value) {
      iterator = iterator.next;
      node = iterator.next;
    }
    iterator.next = node.next;
    return value;
  }

  /**
   * Deletion of a node from linked-list
   * @param  {number!} index Index of the node that needs to be deleted
   * @return {number}       After deletion returns that same value
   */
  deleteByPosition(index) {
    let i = 0,
      iterator = this.head,
      node;
    while (i < index) {
      iterator = iterator.next;
      node = iterator.next;
    }
    iterator.next = node.next;
    let value = node.value;
    return value;
  }

  /**
   * Displays the linked list in a pretty manner
   */
  display() {
    let str = "head -> ",
      node = this.head;
    while (node) {
      str += `${node.value} -> `;
      node = node.next;
    }
    str += "null";
    console.log(str);
  }

  /**
   * Modifying the head pointer of the linked-
   * @return {[type]} [description]
   */
  modifyHead() {}

  /**
   * Getting the length of the linked-list
   * @return {number} length of the linkedlist
   */
  length() {
    let node = this.head,
      len = 0;
    while (node) {
      node = node.next;
      len++;
    }
    return len;
  }

  /**
   * Swap two nodes of a linked list
   * @param  {Node} nodeX first node
   * @param  {Node} nodeY second node
   */
  swap(nodeX, nodeY) {
    let node = this.head, prevX, prevY;
    while(node) {
      if(node.next == nodeX) {
        prevX = node;
      } else if(node.next == nodeY) {
        prevY = node;
      }
      node = node.next;
    }
    prevX.next = nodeY;
    prevY.next = nodeX;
    node = nodeY.next;
    nodeY.next = nodeX.next;
    nodeX.next = node;
  }

  /**
   * Swap two nodes by given values in a given linked list
   * @param  {number} x first number
   * @param  {number} y second number
   */
  swapByVal(x, y) {
    let nodeX,
      nodeY,
      node = this.head;
    while (node) {
      if (node.value == x) nodeX = node;
      if (node.value == y) nodeY = node;
      if (nodeX && nodeY) {
        this.swap(nodeX, nodeY);
        return true;
      }
      node = node.next;
    }
    return false;
  }

  /**
   * Reverse the given linked-list in place
   */
  reverse() {
    let node = this.head, prev = null, next = node.next;
    while(node) {
      node.next = prev;
      prev = node
      node = next
      next = next && next.next;
    }
    this.head = prev;
  }
}

/**
 * Find the length of a linked list recursively
 * @param  {Node} head Head of the linked list is passed
 * @return {number}    length of the given linked-list
 */
function length(head) {
  if (!head) return 0;
  return 1 + length(head.next);
}

var node = new Node(0);

var ll = new LinkedList(node);
ll.display();

ll.push(1);
ll.push(2);
ll.push(3);

ll.display();
console.log("ll length:", ll.length());

console.log("ll length recursively:", length(ll.head));


ll.swapByVal(1,2)
ll.display();

ll.swapByVal(2,5);
ll.display();


ll.reverse();
ll.display();

module.exports = { Node, LinkedList, length };
