//var genericProvider=(function(){
	var serviceList=serviceList || {};
	serviceList.addService=function(name,alias,fn){
			if(!serviceList[name]){
				serviceList[name]=[];				
			}
			var _obj=new Object();
			_obj.alias=alias;
			_obj.fun=fn;
			serviceList[name].push(_obj);
	};
	serviceList.removeService=function(name,alias){
		if(serviceList[name]){		
		if(alias==undefined){	
			delete serviceList[name];			
		}
		else{
			var _i=-1;
			serviceList[name].forEach(function(value,index){
				if(value.alias==alias){
					_i=index;
				return false;
				}
			});
			if(_i!=-1)
				serviceList[name].splice(_i,1);
		}	 
	}
	};
	serviceList.invoke=function(name,alias,_this,_args){		
		if(serviceList[name]){
			serviceList[name].forEach(function(value,index){
				if(value.alias==alias){
					value.fun.apply(_this,_args);
				return false;
				}
			});
		}
	};	
	
		var invokeService=function(_obj){
						$.ajax({
						url: _obj.service,
						// dataType: "jsonp",
						data: _obj.data,	
						contentType: 'application/json',						
						type: 'GET',
						json: true,
						crossDomain: true,	
						success: function (data) {	
							window.location=data;
						},
						error: function (xhr, status, error) {
							console.log('Error: ' + error.message);							
						},
					});
	}
	serviceList.addService("generic","Ajax",invokeService);
$(document).ready(function(e){
		$("#btnlogin").on("click",function(e){
		loginService.login();
	});
});

	/*return{
		addService:serviceList.addService
	} */
//})();