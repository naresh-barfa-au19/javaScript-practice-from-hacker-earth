

function converter(hour) {

    return Number(Math.round(hour)) * 3600

}

function seprator(input) {
    let inputStr = input.toString();
    console.log(inputStr);
    console.log(typeof (inputStr), "and length is:", inputStr.length)
    for (let i = inputStr.length; i >= 0; i--) {
        var newStr = inputStr[i];

        newStr = newStr.concat(",", newStr);

    }
    console.log(newStr)

}


var hour = 30000;

var result = converter(hour);
seprator(hour);


console.log(hour, "hour is equal to :", result, "seconds")