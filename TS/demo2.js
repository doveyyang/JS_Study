var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.onload = function () {
    console.log('onload');
    //构造函数
    function Cat(name, color) {
        this.name = name;
        this.color = color;
        // this.type = 'Animal'
        // this.eat = function(){
        //     console.log('吃老鼠')
        // }
    }
    Cat.prototype.type = 'Animal';
    Cat.prototype.eat = function () {
        console.log('吃老鼠');
    };
    // 原型中
    var cat1 = new Cat('大明', '白色');
    // class 类  ES6
    var Cat2 = /** @class */ (function () {
        function Cat2(name, color) {
            // 构造函数
            this.name = name;
            this.color = color;
        }
        Cat2.prototype.eat = function () {
            console.log('吃老鼠');
        };
        return Cat2;
    }());
    var cat2 = new Cat2('大明', '白色');
    // 继承
    var A = /** @class */ (function () {
        function A(a, name) {
            this.a = '123';
            this.name = name;
        }
        return A;
    }());
    var B = /** @class */ (function (_super) {
        __extends(B, _super);
        function B(a, name) {
            var _this = _super.call(this, a, name) || this;
            _this.b = 'b';
            return _this;
        }
        return B;
    }(A));
    // var a  = new A('c')
    var b = new B('a', 'abc');
    console.log(b.name);
    // 静态方法
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.eat = function () {
            console.log('吃老鼠');
        };
        return Animal;
    }());
    var a = new Animal('aaa');
    Animal.eat();
    // ts中的三种修饰符 public private protected
    //                  公共    私有    受保护
    // 修饰属性和方法    
    var Animal2 = /** @class */ (function () {
        function Animal2(name) {
            this.name2 = name;
        }
        Animal2.prototype.eat = function () {
            console.log('吃老鼠');
        };
        Animal2.prototype.eat2 = function () {
            console.log('eat 2');
        };
        return Animal2;
    }());
    var animal = new Animal2('abc');
    animal.name;
    animal.eat();
    //  animal.eat2()
    //  animal.name2
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name) {
            return _super.call(this, name) || this;
        }
        Dog.prototype.action = function () {
            return this.name3; //调用父类的属性 
        };
        return Dog;
    }(Animal2));
    var dog = new Dog('tom');
    dog.action();
    var Person = /** @class */ (function () {
        function Person() {
            this.name = '大门';
        }
        return Person;
    }());
    // 定义门 类  防盗门添加一个报警的功能(车也有报警功能) 
    // 报警器提取出来，作为一个接口 门，车去实现它
    var Door = /** @class */ (function () {
        function Door() {
        }
        return Door;
    }());
    //定义防盗门
    var SecurityDoor = /** @class */ (function (_super) {
        __extends(SecurityDoor, _super);
        function SecurityDoor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SecurityDoor.prototype.sing = function () {
            console.log('Door sing');
        };
        return SecurityDoor;
    }(Door));
    //定义车
    var Car = /** @class */ (function () {
        function Car() {
        }
        Car.prototype.sing = function () {
            console.log('Car sing');
        };
        return Car;
    }());
};
