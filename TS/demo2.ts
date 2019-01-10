window.onload=function(){
    console.log('onload')

    //构造函数

    function Cat(name,color){
        this.name = name
        this.color = color
        // this.type = 'Animal'
        // this.eat = function(){
        //     console.log('吃老鼠')
        // }
    }
    Cat.prototype.type = 'Animal'
    Cat.prototype.eat = function(){
        console.log('吃老鼠')
    }
    // 原型中
    var cat1 = new Cat('大明','白色');


    // class 类  ES6
    class Cat2 {
        name:string  //定义属性的类型
        color:string // 定义属性的类型
       constructor(name:string,color:string){
           // 构造函数
           this.name = name;
           this.color = color;
       }
       eat(){
        console.log('吃老鼠')
       } 
    }

    var cat2 = new Cat2('大明','白色')

    // 继承
    class A {
        a:string
        name:string
        constructor(a:string,name:string){
            this.a = '123'
            this.name = name;
        }
    }
    class B extends A{
        b:string
        constructor(a,name){
            super(a,name); //父子关系继承的实例化
            this.b = 'b'
        }
    }
    // var a  = new A('c')
    var b = new B('a','abc')
    console.log(b.name)

    // 静态方法
    class Animal{
        name:string
        constructor(name:string){
            this.name = name;            
        }
        static eat(){  // 修饰符 静态方法 不需要实例化处理，可以直接点调用
            console.log('吃老鼠')
        }
    }
    var a = new Animal('aaa')
    Animal.eat()

    // ts中的三种修饰符 public private protected
    //                  公共    私有    受保护
    // 修饰属性和方法    
    class Animal2{
        public name:string // 修饰属性和方法是公共的 任何地方都可以访问
        private name2:string  // 也不允许子类访问
        protected name3:string // 修饰属性和方法是受保护的 区别是子类可以访问
        constructor(name:string){
            this.name2 = name;            
        }
        public eat(){
            console.log('吃老鼠')
        }
        private eat2(){
            console.log('eat 2')
        }
    }
     var animal = new Animal2('abc')
     animal.name
     animal.eat()
    //  animal.eat2()
    //  animal.name2
    
    class Dog extends Animal2{
        constructor(name){
            super(name)
        }
        action(){
            return this.name3; //调用父类的属性 
        }

    }
    var dog  = new Dog('tom')
    dog.action()

    // 类实现接口
    //
    interface P{
        name:string;
    }
    class Person implements P{
        name:string
        constructor(){
            this.name = '大门'
        }
    }

    interface Alarm{
        sing(); // 抽象空的方法
    }
    interface Alarm2{
        sing(); // 抽象空的方法
    }
    interface Light{
        lightOn();
        lightOff();

    }
    // 定义门 类  防盗门添加一个报警的功能(车也有报警功能) 
    // 报警器提取出来，作为一个接口 门，车去实现它
    class Door{

    }

    //定义防盗门
    class SecurityDoor extends Door implements Alarm,Alarm2 {
        sing(){
            console.log('Door sing')
        }
    }
    //定义车
    class Car implements Alarm,Light{
        sing(){
            console.log('Car sing')
        }
        lightOn(){

        }
        lightOff(){

        }
    }

    var s2 = new SecurityDoor();
    s2.sing()

    var c = new Car()
    c.sing()
}