const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
const port = 1000
const ip = '127.0.0.1'






//home
app.get('/', function(req,res){
  let main = fs.readdirSync('Documents/')
  res.render('index.ejs',{
    files: main
  })
  console.log(main)
})

app.post('/', function(req,res){
  let txtDocument = {
     title : req.body.title,
     body : req.body.bodytxt
  }
  res.redirect('/')
  console.log(txtDocument)
  let stringData = JSON.stringify(txtDocument)
  console.log(stringData)
  fs.writeFileSync("Documents/" + txtDocument.title + '.txt', txtDocument.body)
})










//this loads files from the Documents folder
app.get('/loadFile', function(req,res){
  res.render('loadFile.ejs')
})




app.listen(port, ip, function(){
    console.log("Server Up...")
})