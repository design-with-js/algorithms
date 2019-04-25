let { Node, DLL } = require("../DLLTemplate");

console.log("==============================");

function halfSplit(head) {
  let oneJ = head,
    twoJ = head.next;
  if (twoJ == null) {
    return [oneJ, twoJ];
  }

  while (twoJ && twoJ.next) {
    oneJ = oneJ.next;
    twoJ = twoJ.next.next;
  }
  let head2 = oneJ.next;
  oneJ.next = null;
  head2.prev = null;
  return [head, head2];
}

function sortedMerge(headX, headY) {
  let nodeX = headX;
  let nodeY = headY;
  let dll = new DLL();
  nodeZ = dll.head;

  while (nodeX && nodeY) {
    if (nodeX.value < nodeY.value) {
      if (nodeZ) {
        nodeZ.next = nodeX;
        nodeX.prev = nodeZ;
        nodeZ = nodeZ.next;
      } else {
        dll.head = nodeZ = nodeX;
      }
      nodeX = nodeX.next;
    } else {
      if (nodeZ) {
        nodeZ.next = nodeY;
        nodeY.prev = nodeZ;
        nodeZ = nodeZ.next;
      } else {
        dll.head = nodeZ = nodeY;
      }
      nodeY = nodeY.next;
    }
  }
  if (nodeX) {
    nodeZ.next = nodeX;
    nodeX.prev = nodeZ;
  }
  if (nodeY) {
    nodeZ.next = nodeY;
    nodeY.prev = nodeZ;
  }
  return dll.head;
}

function mergeSort(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let [head1, head2] = halfSplit(head);
  return sortedMerge(mergeSort(head1), mergeSort(head2));
}

let dll = new DLL(new Node(6));
dll.prepend(new Node(4));
dll.prepend(new Node(2));
dll.prepend(new Node(7));

// let dll2 = new DLL(new Node(5));
// dll2.prepend(new Node(3));
// dll2.prepend(new Node(1));

// console.log(mergeSort(dll.head));
mergeSort(dll.head).toList().display();
// dll.display();
// dll2.display();
// sortedMerge(dll.head, dll2.head).toList().display();
// .toList()
// .display();
