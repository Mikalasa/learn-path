let one = {
    x: 99,
    y: function () {
        console.log("i am one")
    }
}

let two = Object.create(one)

two["x"] = '88'

console.log(two.x)
console.log(one.x) // two 无法修改继承的one的原值, 相反，它创建了一个同名，但属于two的x新属性

one["x"] = '66'

console.log(two.x)
console.log(one.x) // one也无法修改two的

two["z"] = 520
console.log(two.z) // two可以添加新值


console.log(two.y) // two可以访问继承的one里的属性

delete one["x"]
delete one["y"]
console.log(two.x)
console.log(one.x) // 因为被删了，undefined
console.log(two.y) //js会先找two,two没有y，会顺着原型链一直往上找，one也没有y（被删了），全局object更没有，所以undefined

console.log('toString' in two) // 继承自全局
