// problem:1.-----------------------------------------------------------------------------------------------------------------------------------------------

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// utility fn.
const SpecialFilter = (indexesArr, target) => {
  const filterArray = [];

  let isPushed = false;
  indexesArr.map((item) => {
    if (!isPushed && item.item === target) {
      isPushed = true;
    } else if (isPushed && item.item === target) {
      filterArray.push(item);
    } else {
      filterArray.push(item);
    }
  });
  return filterArray;
};

const findIndexes = (arr = [], target) => {
  arr = arr.map((item, idx) => ({ item, idx }));

  for (let i = 0; i < arr.length; i++) {
    const otherItems = SpecialFilter(arr, arr[i].item);

    // let's sum them and check
    for (let j = 0; j < otherItems.length; j++) {
      if (arr[i].item + otherItems[j].item === target) {
        return [arr[i].idx, otherItems[j].idx];
      }
    }
  }
};

// test part.
// let array =  [3,3];
// console.log(findIndexes(array, 6));

// problem 2. -----------------------------------------------------------------------------------------------------------------------------------------------

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

// test part.
// console.log(threeSum([0,0,0]))
