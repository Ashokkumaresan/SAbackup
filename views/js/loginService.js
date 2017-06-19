var loginService=(function(){
		var loginSA=function(){
			serviceList.invoke("generic","Ajax",this,[{"service":"http://localhost:3000/api/dairy","data":{"username":"ashokkumaresan","password":"godfather"}}]);
		}
	
	return{
		login:loginSA
	}
})();