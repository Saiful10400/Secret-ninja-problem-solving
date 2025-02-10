// problem:1. (Two Sum)
// -----------------------------------------------------------------------------------------------------------------------------------------------

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
// console.log(findIndexes([3,3], 6));

// problem 2. (3Sum)
//  -----------------------------------------------------------------------------------------------------------------------------------------------

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

// problem 3. (Remove Duplicates From Sorted Array) -----------------------------------------------------------------------------------------------------------------------------------------------

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

// test part.
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

// problem 4. (Search Insert Position)---------------------------------------------------------------------------------------------------------------------------------------
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

function searchInsert(nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

// test part.
// console.log(searchInsert([1,3,5,6],7))
