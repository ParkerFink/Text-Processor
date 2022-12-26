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
    let name = req.body.name
    let page = req.body.page
    let parseData = JSON.stringify(page)
    fs.writeFileSync('Documents/' + name + ".txt", parseData)
})



app.listen(1000, '127.0.0.1', function(){
    console.log("Server: Functional ")
})