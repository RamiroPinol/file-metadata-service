var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.post("/get-file-size", upload.single('file'), function (req, res) {
  res.send( JSON.stringify({size : req.file.size} ))
})

app.listen(process.env.PORT || 3000, function () {
  console.log('File Metadata Microservice running!')
})
