function regex(s) {
    // let reg = /^a.*a$|^e.*e$|^i.*i$|^o.*o$|^u.*u$/
    let reg = /^([a|e|i|o|u]).*\1$/
    return reg.test(s)
}
console.log(regex("abcda"))
console.log(regex("abcd"))