


function charCodeValue(str) {
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
        let strCode = str.charCodeAt(i);
        newArr.push([i, str[i], strCode])
    }
    console.log(newArr)
}
var input = "naresh"
charCodeValue(input)
