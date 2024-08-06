const { dif, sum } = require('./lib')

function main() {
    let x = sum(1, 3)
    console.log("1 + 3 =", x)

    let y = dif(x, 2)
    console.log(x, "- 2 =", y)
}

main()
