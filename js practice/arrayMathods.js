let carArray = ["maruti", "van", "bmw", "bugati"];
//array items amd its length

console.log("car array : ", carArray, carArray.length, "items")

// array and its single item

for (let i = 0; i < carArray.length; i++) {
    console.log("accending order list of array :", carArray[i])
}
// reversing the array

let reverseArr = carArray.reverse();

console.log(reverseArr)

//concat  array

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9];
var arr3 = arr1.concat(arr2);
console.log(arr3)


// entries() method

var f = carArray.entries();

for (x of f) {
    x[1][0] = 'gbu'

    console.log(x[1]);
}

// fill method of array

var arr = ["a", 'b', "f", "d", "e"]
var newArr1 = arr.fill("c", 2, 3)
console.log("fill method :", newArr1)

//filter method of array

var numArr = ['12', '13', '45', "34", '66', '22']
var resultArr = numArr.filter(data => data > 20)

console.log(" filter methos", resultArr)


// Array.from() method for converting  string to array

var str4 = 'jai ho'
var arr5 = Array.from(str4)

console.log(arr5)





