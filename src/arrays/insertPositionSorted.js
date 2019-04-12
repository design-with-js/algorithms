/**
 * Find position of an element in a sorted array, if not found
 * then find position at which it could be inserted
 *
 * Apply binarySearch and pick the failure position
 */

function searchInsert(nums, target) {
  let lo = 0,
    hi = nums.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
    // console.log({lo, hi});
  }
  return lo;
}
// eslint-disable-next-line no-console
console.log(searchInsert([1, 3, 5, 6], 7));
