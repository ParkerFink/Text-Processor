const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
const port = 1000
const ip = '127.0.0.1'


app.get('/', function(req,res){
  res.render('index.ejs')  
})

app.post('/', function(req,res){
  let txtDocument = {
     title : req.body.title,
     body : req.body.bodytxt
  }
  res.redirect('/')
  console.log(txtDocument)
})







app.listen(port, ip, function(){
    console.log("Server Up...")
})