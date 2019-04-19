/*
Find the indices of pair of two integers in a given array that produces sum = K
assume there exists only one solution
assume positive integer
*/

// The very first solution that comes to mind is a O(n^2) solution
// => Iterate over all elements of array and at every iteration search for K-a[i] in the rest of the array

function twosum(nums, target) {
  let ans;
  nums.forEach((num, i) => {
    for (let j = i; j < nums.length; j++) {
      if (num + nums[j] == target) {
        ans = [i, j];
      }
    }
  });
  return ans;
}

// Lets try to implement this in O(n)

// Seems impossible right?

// You have to visit every element at least once so there goes minimum time O(n)

// Now when you are standing at an element you are again looking for K-a[i]

// What if you can use more storage to reduce this lookup time further?

function twosumOptimised(nums, target) {
  let o = {}, ans;

  // Lets index all elements in the array in an hash first.

  nums.forEach((num, i) => (o[num] = i));

  // Lets traverse our array now
  // If K-num is found in the hash that means thats the pair we are looking for
  // But we cant use same element twice

  nums.forEach((num, i) => {
    if (o[target - num] && o[target - num] != i) {
      ans = [i, o[target - num]];
    }
  });
  return ans;
}


/*

For returning all the pairs and handle no solution case

ans = []
ans.push([i, o[target - num]])
*/
