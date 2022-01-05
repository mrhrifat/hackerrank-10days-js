var sides = (literals, ...expressions) => {

    // const [s1, s2] = literals

    // console.log(`The area is: ${s1 * s2}.The perimeter is: ${2 * (s1 + s2)}`)

    const [A, P] = expressions
    var s1 = ((P + Math.sqrt(Math.pow(P, 2) - (16 * A))) / 4)

    var s2 = ((P - Math.sqrt(Math.pow(P, 2) - (16 * A))) / 4)

    return [s1, s2].sort()
}


console.log(sides([2]))