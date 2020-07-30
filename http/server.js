const http = require('http')
const fs = require('fs')

var server = http.createServer(function (req, res) {
   var buffer = fs.readFileSync('teste.html')
   res.write(buffer.toString())
   


    res.end()
})

server.listen(2110)
