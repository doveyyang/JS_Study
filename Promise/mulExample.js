function runAsync1(){

    var p = new Promise((resolve,reject)=>{
        
        let data = 'initData 1';
        setTimeout(()=>{
            console.log('执行完成')
            data = 'renAsync 1'
            resolve(data)
        },2000)

    })
    console.log(p)
    return p;
}

function runAsync2(){

    var p = new Promise((resolve,reject)=>{
        
        let data = '初始化数据2';
        setTimeout(()=>{
            console.log('执行完成')
            data = 'renAsync2'
            resolve(data)
        },2000)

    })
    console.log(p)
    return p;
}

function runAsync3(){

    var p = new Promise((resolve,reject)=>{
        
        let data = '初始化数据3';
        setTimeout(()=>{
            console.log('执行完成')
            data = 'renAsync3'
            resolve(data)
        },2000)

    })
    console.log(p)
    return p;
}

runAsync1()
.then(function(data){
    console.log(data);
    return runAsync2();
})
.then(function(data){
    console.log(data);
    return runAsync3();
})
.then(function(data){
    console.log(data);
});