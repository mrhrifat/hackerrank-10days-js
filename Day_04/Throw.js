/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 * 
 * Math.sign() return 
    01) a number 0 if zero
    02) a number -1 if negative
    03) a number 1 is positive
 */
function isPositive(a) {
    switch (Math.sign(a)) {
        case -1:
            throw new Error("Negative Error")

        case 0:
            throw new Error("Zero Error")

        case 1:
            return "YES"
    }
}

console.log(isPositive(3))
console.log(isPositive(5))
console.log(isPositive(8))
// console.log(isPositive(0))
// console.log(isPositive(-3))
