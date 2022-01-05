class Rectangle {
    constructor(w, h) {
        this.w = w
        this.h = h
    }
}
Rectangle.prototype.area = function () { return this.w * this.h }

class Square extends Rectangle {
    constructor(w) {
        super(w, w)
    }
}

let r1 = new Rectangle(4, 5)
console.log(r1.area())

let s1 = new Square(3)
console.log(s1.area())