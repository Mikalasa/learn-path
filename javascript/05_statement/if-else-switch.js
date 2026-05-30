if ("n" === "n") {
    // block1
} else if ("e" === "e") {
    // block2
} else if ("e" === "e") {
    // block3
} else {
    // block4
}

//下面的和上面的一样

if ("n" === "n") {
    // block1
} else {
    if ("e" === "e") {
        // block2
    } else {
        if ("e" === "e") {
            // block3
        } else {
            // block4
        }
    }
}

let age = 20
// case 后面可以写任意能产生值的表达式（Expression）而不是任意复杂逻辑。
switch (true) {
    case age < 18:
        console.log("未成年")
        break

    case age < 30:
        console.log("青年")
        break

    default:
        console.log("成年")
}
