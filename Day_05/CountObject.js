var obj1 = { x: 1, y: 1 }
var obj2 = { x: 2, y: 3 }
var obj3 = { x: 3, y: 3 }
var obj4 = { x: 3, y: 4 }
var obj5 = { x: 4, y: 5 }

// for(var i in obj1){
//     console.log(obj1[i])
// }

// function getCount(objects) {
//     let s = 0
//     for (let i in objects) {
//         let o = objects[i]
//         s += (o.x == o.y)
//     }
//     return s
// }
// console.log(getCount([obj1, obj2, obj3, obj4, obj5]))

// function getCount(objects) {
//     return objects.filter(function (o) { return o.x == o.y }).length
// }

// function getCount(objects) {
//     let a = objects.filter((v) => {
//         return (v.x == v.y)
//     }).length
//     return a
// }

// function getCount(objects) {
//     return objects.filter((value) => { return value.x == value.y }).length
// }

function getCount(objects) {
    let s = 0
    for (let i in objects) {
        let a = objects[i]
        s += (a.x == a.y)
    }
    return s
}
console.log(getCount([obj1, obj2, obj3, obj4, obj5]))