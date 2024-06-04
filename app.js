const http = require('http')

const server = http.createServer((req, res)=>{

    if(req.url ==="/"){
        res.end("welcome to our Home page")
    }
    if(req.url ==="/about"){
        res.end("Here is a short history about us")
    }
    res.end(
        `<h1>Opps!! Unavailable</h1>
        <p> we cant seen\m to get page</p>
        <a href = "/">back to Home page</a>`
        
    )
   
})

