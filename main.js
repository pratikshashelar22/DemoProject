/**
 * Created by abc on 30/05/2016.
 */
var express=require("express");
var bodyParser=require("body-parser");

var app=express();
var port = process.env.PORT || 3002
app.use(express.static('public'));
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a',cors(),function(req,res) {
    res.send("Hello TDD! can u here me?");
});
app.post('/',cors(),function(req,res){   
   var htmlData = 'Hello:';   
   res.send(htmlData);
   console.log(htmlData);
});

app.listen(port,function () {
    console.log("App running");
});