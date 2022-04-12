//leetCode - happy number
/*
https://leetcode.com/problems/happy-number/
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sum = 0;
    
    const arr = n.toString().split('');
    
    for(let i = 0; i < arr.length; i++){
        sum += arr[i] * arr[i];
    }
    
    //success case
    if(sum === 1){
        return true;
    }
    
    //impossible case
    if(sum > 1 && sum <= 4){
       return false;
    }
    
    return isHappy(sum);
};


