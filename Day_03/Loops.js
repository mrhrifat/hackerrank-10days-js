function loopAction(str) {
    var vowel = "aeiou"
    var constant = ""
    for (var i = 0; i <= str.length - 1; i++) {
        if (vowel.includes(str[i])) {
            console.log(str[i])
        } else {
            constant = constant + str[i] + "\n"
        }

    }
    console.log(constant)
}
loopAction("javascriptloop")
