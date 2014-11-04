var express 	= require('express'),
	app 		= express()
	bodyParser 	= require('body-parser'),
	request 	= require('request');

app.get("/",function(req, res){	
	var options ={
		url : "https://apis.bbvabancomer.com/datathon/info/merchants_categories",
		method: 'GET',		
		headers:{
			"Accept": "application/json",
			"Accept-Language": "ES",
			"Content-Type":"application/json",
			"Authorization": "Basic YXBwLmJidmEuZGFuaWVsLXRlc3Q6ZTYyZDMwOGZmZTBiY2U2MWVjZmU2OTE3OTllNjVhOGM5NTAxYWUxYw==" ,
		}
	}	
	
	request(options,function(err,response,body){
		console.log(body);
		res.json(JSON.parse(body));
	});
})


app.listen(3000,function(){
	console.log("escuchando");
});