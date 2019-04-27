
/**
 * Count the number of occurances of a target in given sorted array nums
 * @param  {number[]} nums   A sorted array
 * @param  {number} target Target that need to be searched and counted
 * @return {number}        Number of occurances of the given target in given sorted array
 */
function binaryCount(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  let left, right;

  while(l < r) {
    let mid = Math.floor((l + r) / 2);
    if(nums[mid] >= target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  if(nums[l] != target) {
    return 0;
  }
  left = l;

  l = 0;
  r = nums.length - 1;

  while(l < r) {
    let mid = Math.ceil((l+r)/2);
    if(nums[mid] <= target) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }

  right = r;

  return right - left + 1;
}