const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/functions/date.js");

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let itemsList=[];
let wokItemsList=[];

app.get("/",function(req,res){
	
	res.render("index",{pageTitle:date.getDate(),items:itemsList})
})

app.get("/work",function(req,res){
	res.render("index",{pageTitle:"Today's Work",items:wokItemsList})
})

app.post("/",function(req,res){
	let item=req.body.add_item;
	if(req.body.add_btn == "Today's Work"){
		wokItemsList.push(item);
		res.redirect("/work");
	}else{
		itemsList.push(item);
		res.redirect("/");
	}
	
})

app.listen(3000,function(){
	console.log("Server is listening at PORT:3000");
})