let btn5 = document.getElementById('btn5')
let btnId = [1, 2, 3, 4, 6, 7, 8, 9]
let btnValues = [1, 2, 3, 4, 6, 7, 8, 9]

btn5.addEventListener('click', function (e) {
    btnValues.unshift(btnValues.pop())
    for (let i = 0; i < btnId.length; i++) {
        let f = document.getElementById("btn" + btnId[i]).innerHTML = btnValues[i]
        console.log(f)
    }
})