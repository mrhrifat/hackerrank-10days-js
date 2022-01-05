function regexVar(s) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    // const re = new RegExp(/^(M|E|D)r?s?\./g)
    // const re = new RegExp(/^ (Mr | Mrs | Ms | Dr | Er) \.\w+$ /)
    // const re = new RegExp(/^(M|E|D)rs?\.\w$/g)
    let re = new RegExp(/^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])+$/);
    const re= new RegExp(/(M|D|E)rs?\.[A-Za-z]+$/g)

    /*
     * Do not remove the return statement
     */
    return re.test(s);
}
console.log(regexVar("Mr.Y"))
console.log(regexVar("Mrs.X"))
console.log(regexVar("Er.X"))
console.log(regexVar("Dr#.X"))
console.log(regexVar("Er.Dr."))
console.log(regexVar("Er .Abc"))