var express=require('express');
var router=express.Router();
var mongo=require('mongodb');

//var app=express();

router.get('/api/dairy',function(req,res){
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
module.exports=router;