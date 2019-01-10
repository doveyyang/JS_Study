function fun(){
    var name:string = 'sonia';
    // // name = 123;
    console.log(name);

      var str:string[] = ['a','b','c'];
      console.log(str)

      let a3:any = [1,2,'c'];

      let arr:number[] = [12,3,45,667]
    interface Person{
        name:string  //确定属性
        age:number,
        sex?:boolean  //可选属性
    }

    // 定义的变量与接口保持一致
    let ben:Person = {
        name:'dovey',
        age:12
    }

    //如果想要定义可选属性
    let ben2:Person = {
        name:'btn',
        age:45,
        sex:false
    }

    //任意属性 注意：一旦定义了，确定属性和可选属性必须是它的子属性
    interface Person3{ 
        name:string // 确定属性
        [propName:string]:any // 任意属性 必须是其它的父属性
        age?:number
    }

    let ben5:Person3 = {
        name:"Dovey",
        sex:false,
        age:45
    }

    // 函数声明的两种方式
    // 函数声明 和 函数表达式
    //            x的类型  y的类型 返回值的类型
    function foo(x:number,y:number):number{ // 
        return x+y;
    }
    foo(1,3)
    var foo2 = function(x:string,y:string):string{
        return x+y;
    }
    console.log(foo2('1','b'));
    
    //参数默认值
    var foo3 = function(x:string = 'a',y:string='b'):string{
        return x+y;
    }
    console.log(foo3(undefined,'b'))

    //可选参数的后面，不能再出现非可选参数了
    var foo4 = function(x:string = 'a',y?:string,z?:string):string{
        if(y)
        return x+y;
        return x;
    }
    console.log(foo4('b','ccc'))

    
    //类型别名
    
    type s = string;
    var name : s = 'sonia'
    function fun6(name:s):s{
        return 'hello'+name;
    }

    fun6(name)

    type abc = string | number[];
    type a = number;
    let tabc:abc = [1,2,3]
    function fun7(a3:abc):a{
        return a3.length;
    }
    
}

fun()

