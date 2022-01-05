function button(e) {
    var btn = e.target || e.srcElement
    let res = document.getElementById('res')
    var action = document.getElementById(btn.id).innerHTML

    switch (action) {
        case '0':
        case '1':
        case '+':
        case '-':
        case '*':
        case '/':
            res.innerHTML += action
            break
        case 'C':
            res.innerHTML = ''
            break
        case '=':
            var expression = res.innerHTML
            var num = /(\d+)/g
            expression = expression.replace(num, m => parseInt(m, 2))
            console.log(expression)
            res.innerHTML = eval(expression).toString(2)
            break
        default:
            console.log(new Error(e))
            break

    }

}
var buttons = document.getElementsByTagName('button')
for (let i of buttons) {
    i.onclick = button
}



