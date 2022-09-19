console.log("hello world!");

console.log("Directory : " +__dirname)
console.log("FileName : " +__filename)

//import
const os = require('os')
const path = require('path')

console.log("===========")
console.log("OS Related Property")
console.log(os.homedir)
console.log(os.type)
console.log(os.version)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))
