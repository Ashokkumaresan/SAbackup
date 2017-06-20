var express=require('express');
var bodyParser=require('body-parser');
var mongo=require('mongodb');
var mongoose=require('mongoose');
var Dairy=require('./models/dairy');
var app=express();
app.use('/',express.static(__dirname + '/views'));
app.use(express.static(__dirname));
app.use(bodyParser.json());
//mongoose.connect('mongodb://localhost/SA');
//mongoose.connect('mongodb://localhost/bookstore');
var db=mongoose.connection;

//console.log("Server running in port 3000");

/*app.get('/',function(req,res){
	res.send("Server Running in 3000");	
});*/

/*app.get('/api/dairy',function(req,res){
	console.log(req.query);
		Dairy.getDairy(function(err,dairy){
		if(err)
			res.send("Error while retreving data");
		else{ 
			//res.json(dairy);
			res.contentType('application/json');
			var data = JSON.stringify('http://localhost:3000/dashboard.html')
			res.header('Content-Length', data.length);
			res.end(data);
			//return res.redirect('http://localhost:3000/dashboard.html');
			
		}
	})
});*/
app.get('/api/dairy',function(req,res){
	var query=req.query;
	console.log(query);
	MongoClient=mongo.MongoClient;
	var url='mongodb://localhost/SA';
	MongoClient.connect(url,function(err,db){
		if(err){
			console.log("Error in connecting database");
		}
		else{
			var collection=db.collection("login");
			collection.find(query).toArray(function(err,result){
				if(err){
					console.log("Error is getting data "+err);
				}
				else{					
					res.json(JSON.stringify(result));
				}
			});
			db.close();
		} 	
	});
});
/*app.post('/api/dairy',function(req,res){
		Dairy.getDairy(function(err,dairy){
		if(err)
			res.send("Error while retreving data");
		else{ 
			//res.json(dairy);
			res.redirect('/dashboard.html');
		}
	})
});*/

app.listen(3000);