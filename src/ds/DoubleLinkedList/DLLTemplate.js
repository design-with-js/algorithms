class Node {
  constructor(value, prev, next) {
    this.prev = prev || null;
    this.next = next || null;
    this.value = value;
  }

  toList() {
    return new DLL(this);
  }
}

class DLL {
  constructor(node) {
    this.head = node;
    // this.tail = node;
    // this.length = 0;
  }

  prepend(node) {
    if (this.head) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      // this.tail = node;
    }
    // this.length++;
  }

  push(value) {
    let end = this.end();
    let node = new Node(value);
    end.next = node;
    node.prev = end;
  }

  pop() {
    if (this.head) {
      node = this.head;
      // let node = this.tail;
      // this.tail = this.tail.prev;
      // this.tail.next = null;
      // this.length--;
      while (node.next) {
        node = node.next;
      }
      node.prev.next = null;
      return node;
    }
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

  end() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  delete(value) {}
}

module.exports = { DLL, Node };
