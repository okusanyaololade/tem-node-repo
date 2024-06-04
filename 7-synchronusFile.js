//Helps to read External file system.
const {readFileSync, writeFileSync} = require("fs");
 // note that readFileSyn and writeFileSyn are predefined functions
 const first = readFileSync("./content/1-test.txt", 'utf8')
 const second =readFileSync("./content/2-test.txt", 'utf8')
console.log({first, second})

//writeFileSync
 writeFileSync (
    //path, value you want to pass: String
     "./content/result-sync.txt",
     `Hey this is the result: ${first} and ${second}\n`,
     {flag:"a"}
 
 )