//os menas operaatong system
const os = require('os')
const user = os.userInfo();
console.log(user)
 const timeInterval = os.uptime()
 const min = Math.trunc(timeInterval/60)
 
 console.log(`Your system uptime is : ${min} minutes`)

 // object of OS
  console.log(os.release(), os.totalmem(), os.freemem(), os.type())
 

  // path
  const path = require("path");

  const filePath =  path.join('/nodejs', 'app.js')
  console.log(filePath)

  const absolute = path.resolve(__dirname,'NODEJS', 'app.js')
  console.log(absolute)
  
  