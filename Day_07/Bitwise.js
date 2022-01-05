function getMaxLessThanK(n, k) {
    return ((k | k - 1) <= n ? k - 1 : k - 2);
}
console.log(getMaxLessThanK(2, 3))