function positiveAndNegativeOp(array) {
    let positiveCount = 0
    let oddSum = 0

    for (let i = 0; i < array.length; i++) {
        if(array.length == 0 || array == null){
        const answer = array[i] > 0 ? positiveCount += 1 : oddSum += array[i]

    
    return [positiveCount, oddSum]
        }else{
        return []
    }
}
}

console.log(positiveAndNegativeOp([null]))