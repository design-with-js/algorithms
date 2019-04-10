



function removeElement(nums, val) {
  let j = 0;
  for(let i in nums) {
    if(nums[i]!==val) {
      nums[j] = nums[i];
      j++;
    }
  }
  // console.log(nums, j);
  return j;
}


removeElement([4,5,5,6,5,7,9], 5)