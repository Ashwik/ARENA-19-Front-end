var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.set('view engine','jade');
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render('main');
});


app.listen(3000,function(){
    console.log("server is running");
});