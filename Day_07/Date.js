function getDayName(dateString) {
    let dayName;
    // Write your code here
    var date = new Date(dateString)
    dayName = new Intl.DateTimeFormat('en-Us', { weekday: "long" }).format(date)

    return dayName;
}
console.log(getDayName("10/11/2009"))
console.log(getDayName("11/10/2010"))



//Stack Overflow
function getDayName(dateStr, locale) {
    var date = new Date(dateStr)
    return date.toLocaleDateString(locale, { weekday: 'long' })
}

var dateStr = '05/23/2014'
var day = getDayName(dateStr)

console.log(day)

var getDay = dateStr => {
    const date = new Date(dateStr)
    return new Intl.DateTimeFormat('en-Us', { weekday: "long", hour: "2-digit", month: "long" }).format(date)
}
console.log(getDay("10/11/2009"))
console.log(getDay("11/10/2010"))