var mongoose=require('mongoose');
var dairySchema=mongoose.Schema({
	username:{
		type:String
		
	},
	date:{
		type:String
		
	}
});
var Dairy=module.exports=mongoose.model('dairies',dairySchema);

module.exports.getDairy=function(callback){
	Dairy.find(callback);
}