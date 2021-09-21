function performAction(firstInt, firstDec, firstStr) {
    const int = 4;
    const dec = 4.4;
    const str = " is the best place to learn and practice coding!"
    function intOpr() {
        console.log(firstInt + int);
    }
    function decOpr() {
        console.log(firstDec + dec);
    }
    function strOpr() {
        console.log(firstStr + str);
    }
    intOpr();
    decOpr();
    strOpr();
}
performAction(12, 4.0, "Hackerrank");