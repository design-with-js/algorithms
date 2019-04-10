avg = (a, b) => Math.floor((a + b) / 2);

// nums = [3,4,5,1,2], val = 1

function rotateSortedSearch(nums, val) {
  // finding the smallest element O(log(n))

  var lo = 0,
    hi = nums.length - 1,
    pivot;

  while (lo <= hi) {
    var mid = avg(lo, hi);
    if (nums[lo] <= nums[hi]) {
      pivot = lo;
      break;
    }
    if (nums[mid] >= nums[lo]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  console.log({ lo, hi, pivot });

  if (!pivot || val < nums[0]) {
    lo = pivot;
    hi = nums.length - 1;
  } else {
    lo = 0;
    hi = pivot;
  }

  while (lo <= hi) {
    var mid = avg(lo, hi);
    if (val === nums[mid]) return mid;
    if (val > nums[mid]) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return -1;
}

console.log(
  // rotateSortedSearch([5, 6, 7, 8, 9, 10, 1, 2, 3], 3),
  // rotateSortedSearch([3, 4, 5, 1], 1),
  // rotateSortedSearch([4, 5, 6, 7, 0, 1, 2], 0),
  rotateSortedSearch([3, 1, 3], 3)
);
