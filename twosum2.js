// Problem: Two Sum
//Input: nums = [2, 7, 11, 15], target = 9  
//Output: [0, 1] 
// Because nums[0] + nums[1] == 2 + 7 == 9

//ans

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}; 

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }

    return []; 
};
