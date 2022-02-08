//LeetCode - Power of Three
/*
https://leetcode.com/problems/power-of-three/
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    //check input
    //if n is negative or zero
    if (n <= 0){
      return false;
    }
    
    //if n is one
    if (n === 1){
      return true;
    }  
        
    if (n % 3 === 0){
      return isPowerOfThree(n / 3);
    }  
        
    return false;
};


