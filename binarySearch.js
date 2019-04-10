//nums = [4,5,6,7,8,9] and val = 8

avg = (a, b) => Math.floor((a + b) / 2);

function binarySearch(nums /*increasing sorted array*/, val) {
  var lo = 0,
    hi = nums.length - 1;

  while (lo <= hi) {
    console.log({ lo, hi });

    var mid = avg(lo, hi);
    if (val === nums[mid]) return mid;
    if (nums[mid] > val) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return -1;
}

console.log(
  binarySearch([4, 5, 6, 7, 8, 9], 8),
  binarySearch([1, 4, 6, 9, 11, 87, 234234, 234345345], 4),
  binarySearch([1, 4, 6, 9, 11, 87, 234234, 234345345], 1),
  binarySearch([1, 4, 6, 9, 11, 87, 234234, 234345345], 909090909090),
  binarySearch([1, 3], 3)
);
