//HackerRank - the power sum question
/*
https://www.hackerrank.com/challenges/the-power-sum/problem?isFullScreen=true
*/

function getPowerSumList(maxNumber, currentIndex, currentSum, X, N, tempList, result){
    if(currentIndex > maxNumber){
        return;
    }
    
    if(currentSum > X){
        return;
    }
    
    if(currentSum === X){
        let newList = [...tempList].sort();
        if(!result.includes(newList)){
            result.push(newList);
        }
    }
    
    for(let i = currentIndex; i < maxNumber; i++){
        currentSum += Math.pow(i, N);
        tempList.push(i);
        getPowerSumList(maxNumber, i + 1, currentSum, X, N, tempList, result);
        
        let number = tempList[tempList.length -1];
        currentSum -= Math.pow(number, N);
        tempList.pop();   
    }
    
}

function powerSum(X, N) {
    //X constraints
    if(!(1 <= X && X <= 1000)){
        return;
    }

    //N constraints
    if(!(2 <= N && N <= 100)){
        return;
    }
    
    let maxNumber = 1;
    let isEqual = false;
    
    while(maxNumber < X){
        //to find max possible number
        if(Math.pow(maxNumber, N) === X){
            isEqual = true;
            break;
        }
        maxNumber++;
    }
    
    let tempList = [];
    let result = [];
    
    getPowerSumList(maxNumber, 1, 0, X, N, tempList, result);
    
    return isEqual ? result.length + 1 : result.length;
}



