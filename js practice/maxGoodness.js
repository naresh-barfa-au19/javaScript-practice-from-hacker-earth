let lengthArr = 14;

let intArr = [1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0]
let resultArr = [];

console.log(intArr.length)

for (let i = 0; i < intArr.length; i++) {
    for (let k = i + 1; k < intArr.length; k++) {
        var subArr = intArr.slice(i, k);
        var subArrlen = subArr.length;
        console.log([subArrlen, subArr])
        // now find the difference of num1 and num0
        let num1 = subArr.filter(data => { // []
            if (data === 1) {
                return true;
            }
        })
        let num0 = subArr.filter(data => {
            if (data === 0) {
                return true;
            }
        })

        if (num1.length > num0.length) {
            var diff = num1.length - num0.length;
        } else {
            var diff = num0.length - num1.length
        }

        // now put all difference and subarr in a new result array so that we can filter out max difference 
        resultArr.push([subArrlen, diff])


        //console.log("difference of 1s and 0s of subarray", diff)

    }
}

console.log("result array :", resultArr)

const maxGoodness = resultArr.sort()

console.log(maxGoodness)


