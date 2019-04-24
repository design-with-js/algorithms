let {Node, CLL} = require("../CLLTemplate");

console.log("==============================");

/**
 * Spit the given cll in two halves, first one contains 
 * one extra element if size of original list is odd
 * Just like floyd's method of detecting a loop, we take a forward pointer run that twice
 * the speed of backward pointer, when forward reaches the end of the loop the backward would
 * just be half way
 * @param  {CLL} cll original CLL
 * @return {CLL[]}      Array of size 2 with first and second elements being two resultant cll's
 */
function halfSplit(cll) {
  if(cll.end.next == null) {
    return [cll, new CLL()];
  }
  let forward = cll.end.next.next;
  let backward = cll.end.next;
  while(forward != cll.end && forward.next != cll.end) {
    forward = forward.next.next;
    backward = backward.next;
  }
  if(forward.next == cll.end) {
    forward = forward.next;
  }
  let temp = cll.end.next;
  cll.end.next = backward.next;
  backward.next = temp;
  return [new CLL(forward), new CLL(backward)];
}

let cll = new CLL(new Node(1));

cll.insert(2);
cll.insert(3);
cll.insert(4);
cll.insert(5);

console.log("splitting:")
cll.display();
console.log("result:")
let [cll1, cll2] = halfSplit(cll);
cll1.display();
cll2.display();