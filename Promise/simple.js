// function renAsync(){

//     // 返回一个promise对象    
//     var p = new Promise((resolve,reject)=>{
        
//         let data = '初始化数据';
//         setTimeout(()=>{
//             console.log('执行完成')
//             data = '新数据'
//             resolve(data)
//         },2000)

//     })
//     console.log(p)
//     return p;
// }

// renAsync().then(data=>{
//     console.log(data)
// })


// var promise = new Promise(function (resolve,reject){
//     // 异步处理

//     // 处理结束之后，调用resolve或reject
//     throw 'cuowula'

// })

// promise.then(value=>{
//     console.log(value)
// },error=>{
//     console.log('error:')
//     console.error(error)
// })


// Promise 的三种状态
/*
    1 Fulfilled 成功时调用，
    2 Rejected 失败时调用
    3 unresolved promise对象刚被创建之后的初始化状态

    
*/

// new Promise()

// function want() {
//     console.log('这是你想要执行的代码');
// }

// function fn(want) {
//     // 将想要执行的代码放入队列中，根据事件循环的机制，我们就不用非得将它放到最后面了，由你自由选择
//     want && setTimeout(want, 0);
//     console.log('这里表示执行了一大堆各种代码');
// }

// fn(want);

// function want() {
//     console.log('这是你想要执行的代码');
// }

// function fn(want) {
    
//     console.log('这里表示执行了一大堆各种代码');
//     return new Promise(function(resolve,reject){
//         if(typeof want == 'function'){
//             resolve(want)
//         }else{
//             reject('TypeError: '+want+'不是一个函数')
//         }
//     })
// }

// fn(want).then(function(want){
//     want()
// });

// fn('123').catch(function(err){
//     console.log(err)
// })

// Promise 对象中的then方法，可以接收狗展函数中处理的状态变化，并分别对应执行，then方法有两个参数，第一个函数接收resolved状态的执行，第二个参数接收reject状态的执行

// function fn(num){
//     console.log(typeof(num))
//     return new Promise(function( resolve,reject){
//         if(typeof num == 'number'){
//             resolve(num)
//         }else{
//             reject(num)
//         }
//     });
// }
// fn(132).then(function(res,rej){

//     console.log('参数值是一个number值',res,rej)
// },function(err,error){
//     console.log('error:',err,error);
// });

// fn('haha').then(res=>{0
//     console.log(res)
// },error=>{
//     console.error('error:',error)
// }).then(null,function(){   // 等用于catch(function()){}
// })

// 链式调用
function fn(num){
    return new Promise((resolve,reject)=>{
        if(typeof num == 'number'){
            resolve(num)
        }else{
            reject(num)
        }
    })
}

fn(2).then(function(res){
    console.log('first: ',res)
    return res + 1;
}).then(function(res){
    console.log('second:',res)
    return res + 1;
}).then(function(res){
    console.log('third:',res)    
}).catch(error=>{
    console.log(error)
})


