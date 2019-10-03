function positiveAndNegativeOp(array) {
    let positiveCount = 0
    let oddSum = 0

    for (let i = 0; i < array.length; i++) {
        const answer = array[i] > 0 ? positiveCount += 1 : oddSum += array[i]

    }
    return [positiveCount, oddSum]
}

console.log(positiveAndNegativeOp([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))