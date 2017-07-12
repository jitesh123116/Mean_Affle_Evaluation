var url='mongodb://192.168.2.223:27017/customer';
var userschema=require('./customer');

//Schema for user
var customerschema=userschema.

//model for user data
var model=userschema.model;

//mongodb connection 
mongo.connect(url,function(err){
	if(err)
		console.log(err);
	else
		console.log("connected");
})

//exports model
module.exports= {
	model: model
}