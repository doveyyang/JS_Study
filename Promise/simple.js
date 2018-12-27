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


var promise = new Promise(function (resolve,reject){
    // 异步处理

    // 处理结束之后，调用resolve或reject
    throw 'cuowula'

})

promise.then(value=>{
    console.log(value)
},error=>{
    console.log('error:')
    console.error(error)
})


// Promise 的三种状态
/*
    1 Fulfilled 成功时调用，
    2 Rejected 失败时调用
    3 unresolved promise对象刚被创建之后的初始化状态

    
*/

// new Promise()

