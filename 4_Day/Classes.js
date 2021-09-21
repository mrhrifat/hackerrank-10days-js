class Polygon {
    constructor(length) {
        this.length = length
    }
    perimeter() {
        return this.length.reduce((pv, cv) => pv + cv)
    }
}
// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5])

// Print the perimeter
console.log(triangle.perimeter())