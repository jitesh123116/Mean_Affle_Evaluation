
var url = 'mongodb://192.168.2.223:27017/customer';
var userSchema= require('./customer')

var userModel= userSchema.model;


module.exports={
    userModel : userModel
}