function factorialNumber(num) {
    if (num < 0) {
        return -1
    } else if (num == 0) {
        return 1;
    } else {
        return num * factorialNumber(num - 1);
    }
}
console.log(factorialNumber(5))