class Node {
  /**
   * Node of a linked list has a value and a next which points to next node
   * @param  {number}   value A numeric value for simplistic case
   * @param  {any} [next=null]  next stores the value of next node, default value is null
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class CLL {
  /**
   * Circular Linked-List class where the end of the LinkedList points back to the
   * end pointer of the linked-list
   * @param  {Node} [node=null] base node for initialisation
   */
  constructor(node = null) {
    this.end = node;
    node && !node.next && (node.next = this.end);
  }

  /**
   * Inserts a node at the end with a given value
   * @param  {number} value Integer to be stored in the end node of the CLL
   */
  insert(value) {
    let node = new Node(value);
    if (this.end) {
      node.next = this.end.next;
      this.end.next = node;
      this.end = node;
    } else {
      this.end = node;
    }
  }

  /**
   * Inserts a node at the beginning with a given value
   * @param  {number} value Integer to be stored in the end node of the CLL
   */
  prepend(value) {
    let node = new Node(value);
    if (this.end) {
      node.next = this.end.next;
      this.end.next = node;
    } else {
      this.end = node;
    }
  }

  /**
   * Insert a node after given value in CLL
   * @param  {Number!} valueBefore Integer value after which the new node to be inserted
   * @param  {Number!} value       new node's contained value as integer
   * @return {boolean}             returns if the node was successfully inserted or not
   */
  insertAt(valueBefore, value) {
    if (!this.end) {
      return false;
    }
    let node = this.end.next;
    while (node != this.end) {
      if (node.value == valueBefore) {
        break;
      }
    }
    if (node.value == valueBefore) {
      let tempNode = new Node(value);
      tempNode.next = node.next;
      node.next = tempNode;
      if (node == this.end) {
        this.end = this.end.next;
      }
      return true;
    }
    return false;
  }

  display() {
    let node = this.end.next;
    let str = "head -> ";
    while (node && node != this.end) {
      str += node.value + " -> ";
      node = node.next;
    }
    str += node.value + " -> head";
    console.log(str);
  }

  delete() {}
}

let cll = new CLL(new Node(1));

cll.insert(2);
cll.insert(3);
cll.insert(4);

cll.display();

module.exports = { CLL, Node };
