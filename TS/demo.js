function fun() {
    var name = 'sonia';
    // // name = 123;
    console.log(name);
    var str = ['a', 'b', 'c'];
    console.log(str);
    var a3 = [1, 2, 'c'];
    var arr = [12, 3, 45, 667];
    // 定义的变量与接口保持一致
    var ben = {
        name: 'dovey',
        age: 12
    };
    //如果想要定义可选属性
    var ben2 = {
        name: 'btn',
        age: 45,
        sex: false
    };
    var ben5 = {
        name: "Dovey",
        sex: false,
        age: 45
    };
    // 函数声明的两种方式
    // 函数声明 和 函数表达式
    //            x的类型  y的类型 返回值的类型
    function foo(x, y) {
        return x + y;
    }
    foo(1, 3);
    var foo2 = function (x, y) {
        return x + y;
    };
    console.log(foo2('1', 'b'));
    //参数默认值
    var foo3 = function (x, y) {
        if (x === void 0) { x = 'a'; }
        if (y === void 0) { y = 'b'; }
        return x + y;
    };
    console.log(foo3(undefined, 'b'));
    //可选参数的后面，不能再出现非可选参数了
    var foo4 = function (x, y, z) {
        if (x === void 0) { x = 'a'; }
        if (y)
            return x + y;
        return x;
    };
    console.log(foo4('b', 'ccc'));

}
fun();
