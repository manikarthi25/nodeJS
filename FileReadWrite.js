const path = require('path');
const fs = require('fs');

const fileName = path.join(__dirname, 'readFile.txt');
console.log("File Name : " +fileName)

fs.readFile(fileName, 'utf8', (err, data) => {
    if(err) throw err
    console.log(data); 
})

fs.writeFile(path.join(__dirname, 'writeFile.txt'), 'this is write file', (err) => {
    if(err) throw err
    console.log("Write Operation Completed"); 

    fs.appendFile(path.join(__dirname, 'writeFile.txt'), '\n\nappend file', (err) => {
        if(err) throw err
        console.log("Append Operation Completed"); 
    })

    fs.rename(path.join(__dirname, 'writeFile.txt'), path.join(__dirname, 'newWriteFile.txt'), (err) => {
        if(err) throw err
        console.log("Rename Operation Completed"); 
    })

})

process.on('uncaughtException', (err) => {
    console.error("This is uncaughtException", +err)
    process.exit(1)
})
