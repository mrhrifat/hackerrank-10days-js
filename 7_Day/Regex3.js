function regexVar(s) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    // let re1 = s.split("").toString()
    // let re = re2.split("")
    let re = s.match(/[0-9]+/g)

    /*
     * Do not remove the return statement
     */
    return re;
}
console.log(regexVar("102, 1948948 and 1.3 and 4.5"))