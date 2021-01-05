// input the length of array N
// find smallest number (output) exatly repeated k times

let inputArr = [2, 2, 2, 1, 3, 1, 1, 3]

let inputObj = {
    '2': 1,
    "1": 1,
    "3": 1
}


for (let i = 0; i < inputArr.length; i++) {
    i = i.toString()
    console.log(Object.keys(inputObj)[inputArr[i]])
    if (!Object.keys(inputObj)[inputArr[i]]) {
        Object.defineProperty(inputObj, inputArr[i], { value: 1 })
    } else {
        inputObj[inputArr[i]] = inputObj[inputArr[i]] + 1
    }
}

console.log("input object :", inputObj)

