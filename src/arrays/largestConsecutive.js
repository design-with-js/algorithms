// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor(data) {
//     this.head = new Node(data);
//     this.tail = this.head;
//     this.length = 1;
//   }

//   insert(data) {
//     this.tail.next = new Node(data);
//     this.tail = this.tail.next;
//     this.length++;
//   }

//   attach(list) {
//     this.tail.next = list.head;
//     this.tail = list.tail;
//     this.length += list.length;
//   }

//   toArray() {
//     var arr = [],
//       node = this.head;
//     while (node != null) {
//       arr.push(node.data);
//       node = node.next;
//     }
//     return arr;
//   }
// }

// var max = function(nums) {
//   var t = Number.MIN_SAFE_INTEGER;
//   nums.forEach(num => {
//     if (t < num) {
//       t = num;
//     }
//   });
//   return t;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  // var diff = Number.MAX_SAFE_INTEGER - max(nums);

  // nums = nums.map(num => num + diff);

  var obj = {},
    ans = 0;

  nums.forEach(num => {
    obj[num] = 1;
  });

  nums.forEach((num, i) => {
    if (!obj[num - 1]) {
      var j = num;
      while (obj[j]) j++;
      ans = ans > j - num ? ans : j - num;
    }
  });
  // eslint-disable-next-line no-console
  console.log(ans);

  return ans;
};

longestConsecutive([100, 4, 200, 1, 3, 2]);
longestConsecutive([1, 2, 0, 1]);
longestConsecutive([1, 3, 5, 2, 4]);
longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]);
