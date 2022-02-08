//LeetCode - House Robber
/*
https://leetcode.com/problems/house-robber/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //check input
    if(!nums.length){
        return 0;
    }
  
    if(nums.length === 1){
        return nums[0];
    }
    
    let possibleAmounts = [nums[0], Math.max(nums[0], nums[1])];
    
    for(let i = 2; i < nums.length; i++){
        let opt1 = possibleAmounts[i-2];
        let opt2 = possibleAmounts[i-1];
        
        if(opt1 + nums[i] > opt2){
            possibleAmounts[i] = opt1 + nums[i];
        }else{
            possibleAmounts[i] = opt2;
        }
    }
    
    return possibleAmounts[nums.length-1];
};

