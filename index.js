
var express=require('express')
var cors=require('cors')
var bodyParser=require('body-parser')
var multer=require('multer')


var app=express()
var port=process.env.PORT || 3000
var upload = multer({ dest: 'uploads/' })

app.use(bodyParser.json())
app.use(cors())
app.use(express.static(__dirname + '/public'))

app.post('/api/upload', upload.single('upfile'), function (req, res, next) {
     res.json({fileName:req.file.filename, size:req.file.size})
  })


app.listen(port,function(){console.log(`Server is running on port ${port}`)})