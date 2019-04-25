class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(node) {
    if (!node) {
      throw "Cant initialize without a rt";
    }
    this.rt = node;
  }
}

function BstToList(rt) {
  if (rt == null) {
    return null;
  }

  if (rt.left == null && rt.right == null) {
    rt.left = rt;
    rt.right = rt;
    return rt;
  }

  let leftDll = BstToList(rt.left);
  let rightDll = BstToList(rt.right);

  leftDll.left.right = rt;
  rt.left = leftDll.left;
  rt.right = rightDll;
  let last = rightDll.left;
  rightDll.left = rt;

  leftDll.left = last;
  last.right = leftDll;

  return leftDll;

}

let node = new Node(5);
node.right = new Node(7);
node.left = new Node(3);
node.left.left = new Node(2);
node.left.right = new Node(4);
node.right.left = new Node(6);
node.right.right = new Node(8);

node = BstToList(node);

console.log(node.value)
console.log(node.right.value)
console.log(node.right.right.value)
console.log(node.right.right.right.value)
console.log(node.right.right.right.right.value)
console.log(node.right.right.right.right.right.value)
console.log(node.right.right.right.right.right.right.value)
console.log(node.right.right.right.right.right.right.right.value)
