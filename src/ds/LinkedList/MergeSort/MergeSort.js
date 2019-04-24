let { LinkedList, Node } = require("../LinkedListTemplate");
let mergeSortedLists = require("../MergeTwoSortedLists/MergeTwoSortedLists");

function halfSplit(head) {
  let oneJ = head,
    twoJ = head.next;
  if (!twoJ) {
    return [oneJ, twoJ];
  }
  while (twoJ.next) {
    oneJ = oneJ.next;
    twoJ = twoJ.next.next;
  }
  let head2 = oneJ.next;
  oneJ.next = null;
  return [head, head2];
}

function mergeSort(head) {
  if (head == null || head.next == null) {
    // console.log("fired");
    return head;
  }
  let [head1, head2] = halfSplit(head);
  return mergeSortedLists(mergeSort(head1), mergeSort(head2));
}

let ll = new LinkedList(new Node(8));

ll.push(7);
ll.push(6);
ll.push(5);
ll.push(4);
ll.push(3);
ll.push(2);
ll.push(1);

console.log("\n\nmerge sorting following list:")
ll.display();
console.log("result:");
mergeSort(ll.head)
  .toList()
  .display();