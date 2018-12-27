// function runAsync1(){

//     var p = new Promise((resolve,reject)=>{
        
//         let data = 'initData 1';
//         setTimeout(()=>{
//             console.log('执行完成')
//             data = 'renAsync 1'
//             resolve(data)
//         },2000)

//     })
//     console.log(p)
//     return p;
// }

// function runAsync2(){

//     var p = new Promise((resolve,reject)=>{
        
//         let data = '初始化数据2';
//         setTimeout(()=>{
//             console.log('执行完成')
//             data = 'renAsync2'
//             resolve(data)
//         },2000)

//     })
//     console.log(p)
//     return p;
// }

// function runAsync3(){

//     var p = new Promise((resolve,reject)=>{
        
//         let data = '初始化数据3';
//         setTimeout(()=>{
//             console.log('执行完成')
//             data = 'renAsync3'
//             resolve(data)
//         },2000)

//     })
//     console.log(p)
//     return p;
// }

// runAsync1()
// .then(function(data){
//     console.log(data);
//     return runAsync2();
// })
// .then(function(data){
//     console.log(data);
//     return runAsync3();
// })
// .then(function(data){
//     console.log(data);
// });

function getURL(URL) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(new Error(req.statusText));
        };
        req.send();
    });
}

// 运行请求实例
var  URL = 'http://httpbin.org/get'
getURL(URL).then(function onFulFilled(value){
    console.log(value)
}).catch(function onRejected(error){
    console.error(error)
});