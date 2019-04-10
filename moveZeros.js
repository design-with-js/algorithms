function moveZeroes(nums) {
  let j = 0;
  for (let i in nums) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }

  for (var i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
  // console.log(nums);
  return j;
}

moveZeroes([4, 0, 0, 6, 0, 7, 9]);
