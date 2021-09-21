function getLetter(s) {

    var feedback = s[0]
    // let str = ["a", "e", "i", "o", "u"];
    // let str2 = ["b", "c", "d", "f", "g"];
    // let str3 = ["h", "j", "k", "l", "m"];
    // let str4 = ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

    switch (feedback) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            feedback = "A"
            break;

        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            feedback = "B"
            break;

        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            feedback = "C"
            break

        case "n":
        case "p":
        case "q":
        case "r":
        case "s":
        case "t":
        case "v":
        case "w":
        case "x":
        case "y":
        case "z":
            feedback = "D"
            break
        default:
            feedback = "Invalid"
    }
    return feedback
}

console.log(getLetter("adfgt"))