const express = require('express')
const app = express()
const fs = require('fs')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))



app.get('/', function(req,res){
    res.render('index.ejs')
})

app.post('/', function(req,res){
    res.render('index.ejs')
    let page = req.body.page
    let stringData = JSON.stringify(page)
    fs.writeFileSync('Documents/test.py', stringData)

})



app.listen(1000, '127.0.0.1', function(){
    console.log("Server: Functional ")
})