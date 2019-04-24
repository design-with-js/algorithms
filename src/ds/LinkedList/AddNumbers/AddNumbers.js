let { Node, LinkedList } = require("../LinkedListTemplate");

console.log(
  "===================================================================="
);
/**
 * Given two numbers represented by two lists, write a function that returns sum list. The sum list is list representation of addition of two input numbers.
Example 1

Input:
  First List: 5->6->3  // represents number 365
  Second List: 8->4->2 //  represents number 248
Output
  Resultant list: 3->1->6  // represents number 613
Example 2

Input:
  First List: 7->5->9->4->6  // represents number 64957
  Second List: 8->4 //  represents number 48
Output
  Resultant list: 5->0->0->5->6  // represents number 65005
 * @param {LinkedList!} listX First number represented as list
 * @param {LinkedList!} listY Second number represented as list
 * @return {LinkedList} Resultant link list representing the sum of two numbers
 */
function addNumbers(listX, listY, carry = 0) {
  console.log("asd");
  listX.display();
  listY.display();
  if (listX.head == null && listY.head == null) {
    return carry ? new LinkedList(new Node(carry)) : new LinkedList();
  }

  if (listX.head == null) {
    let value = listY.head.value + carry;
    let ll = new LinkedList(new Node(value));
    node = listY.head.next;
    while (node) {
      node = node.next;
      ll.append(node.value);
    }
    return ll;
  }

  if (listY.head == null) {
    let value = listX.head.value + carry;
    let ll = new LinkedList(new Node(value));
    node = listX.head.next;
    while (node) {
      node = node.next;
      ll.append(node.value);
    }
    return ll;
  }

  let n = listX.head.value + listY.head.value + carry;
  let digit = n % 10;
  carry = Math.floor(n / 10);
  let list = addNumbers(
    new LinkedList(listX.head.next),
    new LinkedList(listY.head.next),
    carry
  );
  
  return list.prepend(new Node(digit));
}

let ll1 = new LinkedList(new Node(5));
ll1.push(6);
ll1.push(3);

let ll2 = new LinkedList(new Node(8));
ll2.push(4);
ll2.push(2);

addNumbers(ll1, ll2).display();

ll1.display();
ll2.display();
