/**
 * Problem url: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * Find first and last position of a number k in a sorted array
 * required complexity: O(log(n))
 *
 * Solution: binary search for k in left bound and then in right bound
 */

function rangeSearch(nums, target) {
  const n = nums.length;
  let lo = 0,
    hi = n - 1;
  let mid;
  while (lo <= hi) {
    mid = Math.floor((hi + lo) / 2);
    if(lo == hi) break;
    if (target > nums[mid]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  if (nums[mid] != target) {
    return [-1, -1];
  }
  const leftOccur = lo;

  lo = 0;
  hi = n - 1;

  while (lo <= hi) {
    mid = Math.ceil((hi + lo) / 2);
    if(lo == hi) break;
    if (target < nums[mid]) {
      hi = mid - 1;
    } else {
      lo = mid;
    }
  }
  const rightOccur = lo;

  return { leftOccur, rightOccur };
}

// eslint-disable-next-line
console.log(rangeSearch([5, 7, 7, 8, 8, 10], 8));
