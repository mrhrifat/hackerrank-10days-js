function bitwise(n, k) {
    return ((k | k - 1) <= n ? k - 1 : k - 2);
}
console.log(bitwise(2,3))