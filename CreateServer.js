var http = require('http')
var dt = require('./GetCurrentDate')
var url = require('url')

//create server with port number 8080
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Current Date :" +dt.myDateTime()+"\n");
    res.write(req.url +"\n");
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);