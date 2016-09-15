var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static("build"));

app.get('/',function(req,res){
	res.send("hey there buddy!");
});

app.listen('3002',function(){
	console.log('running exp-tree app on port 3002...');
});