let Stack = require("../Stack");

/**
 * Given an array, print the Next Greater Element (NGE) for every element. The Next greater Element for an element x is the first greater element on the right side of x in array. Elements for which no greater element exist, consider next greater element as -1.

Examples:
a) For any array, rightmost element always has next greater element as -1.
b) For an array which is sorted in decreasing order, all elements have next greater element as -1.
c) For the input array [4, 5, 2, 25}, the next greater elements for each element are as follows.

Element       NGE
   4      -->   5
   5      -->   25
   2      -->   25
   25     -->   -1
d) For the input array [13, 7, 6, 12}, the next greater elements for each element are as follows.

  Element        NGE
   13      -->    -1
   7       -->     12
   6       -->     12
   12     -->     -1
 * @param  {number[]} nums Input array of integers
 * @return {number[]}      Output array representing next greater element of every element
 */
function nextGreater(nums) {
  let d = Array(nums.length).fill(-1);
  // let d = [];
  let s = new Stack();

  for (let i = 0; i < nums.length; ) {
    if (s.isEmpty() || nums[i] < nums[s.top()]) {
      s.push(i);
      i++;
    } else {
      let index = s.pop();
      d[index] = nums[i];
    }
  }

  console.log({ s, d });
  return d;
}

nextGreater([4,5,2,25]);
nextGreater([13,7,6,12]);
nextGreater([11, 13, 2, 21, 25, 3]);
nextGreater([1, 3, 2, 4])
