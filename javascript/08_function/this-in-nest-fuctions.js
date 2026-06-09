let o = {
    fn: function () {
        let self = this
        console.log(this, " ", this === o)
        nest()
        function nest() {
            console.log(this)   //嵌套函数里的this不会是父函数，是全局（undefined在严格模式下）
            console.log(self === o)     // 这就是为什么要在父函数使用self = this，变量接一下
            console.log(this === o)
        }
    }
}
o.fn()
