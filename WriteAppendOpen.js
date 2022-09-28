var fs = require('fs')

//write file
fs.writeFile("writefile.txt", 'Write the data into file', function(err) {
    if(err) throw err
    console.log('writing operation success');
});

//append file
fs.appendFile("writefile.txt", ' append the data into file', function(err) {
    if(err) throw err
    console.log('append the data success');
});

//open file
fs.open("openfile.txt", 'w', function(err) {
    if(err) throw err
    console.log("open file success");
})

//delete file
var fs = require('fs');

fs.unlink('openfile.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

//rename file
var fs = require('fs');

fs.rename('writefile.txt', 'renamewritefile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});