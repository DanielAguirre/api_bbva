var express 	= require('express'),
	app 		= express()
	bodyParser 	= require('body-parser'),
	request 	= require('request'),
	options = {
		method: 'GET',		
		headers:{
			"Accept": "application/json",
			"Accept-Language": "ES",
			"Content-Type":"application/json",
			"Authorization": "Basic YXBwLmJidmEuZGFuaWVsLXRlc3Q6ZTYyZDMwOGZmZTBiY2U2MWVjZmU2OTE3OTllNjVhOGM5NTAxYWUxYw==" ,
		}
	};

app
.get("/",function(req, res){	
	options.url = "https://apis.bbvabancomer.com/datathon/info/merchants_categories";	
	
	request(options,function(err,response,body){
		console.log(body);
		res.set("Content-Type", "application/json");
		res.json(JSON.parse(body));
	});
})
.get('/geo',function(req,res){
	options.url = "https://apis.bbvabancomer.com/datathon/tiles/20.685/-103.365/payments_cub?category=all&date_min=20140101&date_max=20140301&group_by=month"

	request(options,function(err,response,body) {
		console.dir(body);
		res.set("Content-Type", "application/json");
		res.json(JSON.parse(body));
	});	
})
.get('/customer',function(req,res) {
	options.url = "https://apis.bbvabancomer.com/datathon/tiles/20.685/-103.365/customer_zipcodes?by=cards&category=mx_fashion&date_min=20140101&date_max=20140301&group_by=month";

	request(options,function(err,response,body) {		
		console.dir(body);
		res.set("Content-Type", "application/json");
		res.json(JSON.parse(body));
	});	
})
.get('/zip',function(req,res){
	options.url="https://apis.bbvabancomer.com/datathon/zipcodes/15390/payments_cube?category=mx_fashion&date_min=20140101&date_max=20140301&group_by=month";	
	request(options,function(err,response,body){		
		console.dir(body);
		var x = JSON.parse(body);		
		res.set("Content-Type", "application/json");
		res.json(JSON.parse(body));
	});	
})



app.listen(3000,function(){
	console.log("escuchando");
});
