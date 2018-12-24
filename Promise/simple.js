function renAsync(){

    var p = new Promise((resolve,reject)=>{
        
        let data = '初始化数据';
        setTimeout(()=>{
            console.log('执行完成')
            data = '新数据'
            resolve(data)
        },2000)

    })
    console.log(p)
    return p;
}

renAsync().then(data=>{
    console.log(data)
})



