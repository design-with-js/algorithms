//nums is sorted

var removeDuplicates = nums => {
  var j = 0;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }

  console.log({ nums, j });

  return nums.length;
};

removeDuplicates([1, 1, 2]);
