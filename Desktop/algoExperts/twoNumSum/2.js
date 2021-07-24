var twoSum = function(nums, target) {
    const indices = {};

    nums.forEach((item, index) => {
        indices[item] = index
    });

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];

        if (indices[complement] !== undefined && indices[complement] !== index) {
            return [index, indices[complement]]
        }
    }
};

var twoSum = function(nums, target) {
     
    nums.sort((a, b) => a - b);
     let left = 0;
     let right = nums.length - 1;
     
     while(left < right) {
         const currentSum = nums[left] + nums[right];
         if (currentSum === target) {
             return [nums[left], nums[right]];
         } else if (currentSum < target) {
             left++;
         } else if (currentSum > target) {
             right --;
         }
     }
     return [];
 };