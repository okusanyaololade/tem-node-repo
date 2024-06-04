const {readFile, writeFile} = require('fs')

readFile('./content/1-test.txt','utf8' , (err, result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result;

    readFile("./content/2-test.txt",'utf8', (err,result)=>{
        if(err){
            console.log(err)
            return;
            }
         const second = result

    writeFile("./content/result-aSync.txt",
    `Hey this is the result: ${first},${second}` ,
    (err, result)=>{
        if(err){
            console.log(err)
        }
        console.log(result)

    })


  })
})


