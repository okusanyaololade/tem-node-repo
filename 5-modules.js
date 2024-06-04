// const name = "shawn";
// console.log(name);
// //no windows in node.js because there is no browser instead it uses terminal
// // __fileName : file name
// // __dirname : path to current directory
// //require - function to modulr (CommonJS)

// console.log(__filename);
// setInterval(()=>{
//    console.log("hello") 

//MODULES: they are encapsulated codes

const names = require("./1-names")
const sayHi = require("./2-utils")
const data = require("./3-alternative")
const addValue = require ("./4-maths")

 
sayHi(names.john, names.ruth)
addValue()

