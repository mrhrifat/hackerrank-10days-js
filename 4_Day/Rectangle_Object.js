function Rectangle(a, b) {
    this.length = a
    this.width = b
    this.parameter = 2 * (this.length + this.width)
    this.area = this.length * this.width

    console.log(this.length + "\n" + this.width + "\n" + this.parameter + "\n" + this.area)
}
Rectangle(4, 5)
