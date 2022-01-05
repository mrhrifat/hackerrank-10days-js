function modifyArray(nums) {
    return nums.map(n => n % 2 == 0 ? n * 2 : n * 3)
}
let a1 = modifyArray([1, 2, 3, 4, 5])
console.log(a1)