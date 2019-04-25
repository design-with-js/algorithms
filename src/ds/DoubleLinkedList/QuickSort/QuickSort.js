let { Node, DLL } = require("../DLLTemplate");

let t = 0;
console.log("==================================");

function partition(head, end) {
  let i = head;
  let j = end;
  let key = head.value;
  while (j != i) {
    if (i.value > key) {
      let temp = j.value;
      j.value = i.value;
      i.value = temp;
    }
    if (j.value < key) {
      let temp = j.value;
      j.value = i.value;
      i.value = temp;
    }

    if (j.value > key) {
      j = j.prev;
    }
    if (i.value < key) {
      i = i.next;
    }
  }
  return j;
}

function quickSort(head, end) {

  t++;

  if(t>100) {
    return;
  }

  if (head.next == null || head == null || head == end) {
    return head;
  }



  let pivot = partition(head, end);

  // console.log(head.value, head.next.value, end.value, {t, piv: pivot.value});


  quickSort(head, pivot);
  quickSort(pivot.next, end);
}

let dll = new DLL(new Node(10));
dll.push(11);
dll.push(12);
dll.push(7);
dll.push(8);
dll.push(9);
dll.push(13);
dll.push(14);

dll.display();

quickSort(dll.head, dll.end());

dll.display();
