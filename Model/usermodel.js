var url='mongodb://192.168.2.223:27017/customer';
var userschema=require('./customer');

//model for user data
var model=userschema.model;

//exports model
module.exports= {
	model: model
}