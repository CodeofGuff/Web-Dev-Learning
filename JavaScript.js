// hello world


// Random Number Function
function number(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let rnumber = number(1, 999999)
console.log(rnumber)