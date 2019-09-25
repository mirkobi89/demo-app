var express = require ("express"),
	app = express(),
	bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

var hashtags = [];

var punteggio = 10;

//app config
app.set("view engine", "ejs");
app.use(express.static("public"));

//routes
app.get("/", function(req,res){
	res.render("index");
})
app.get("/devices", function(req,res){
	res.render("devices");
})

app.get("/follower", function(req,res){
	res.render("follower");
})

app.get("/social", function(req,res){
	res.render("social");
})

app.get("/comunication", function(req,res){
	res.render("comunication");
})

app.get("/chatbot", function(req,res){
	res.render("chatbot");
})

app.get("/hashtag", function(req,res){
	res.render("hashtag");
})

app.post("/hashtag",function(req,res){
	var hashtag = req.body.hashtag;
	hashtags.push(hashtag);
	res.redirect("risultato_test");
})

app.get("/risultato_test", function(req,res){
	res.render("risultato_test", {punteggio:punteggio});
})

app.get("/hashtag_list",function(req,res){
	res.render("hashtag_list", {hashtags:hashtags});
})
app.listen(3000, process.env.IP, function(){
	console.log("Server started...");
})