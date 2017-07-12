var express=require('express');
var router=express.Router();
var body=require('body-parser');
var multer=require('multer');
var userservice=require('../Services/user');

//Strore the upload image in a folder
var store=multer.diskStorage({
	destination: function(req,file,cb){
		cb(null, __dirname+'/../upload')
	},
	filename: function(req,file,cb){
		cb(null, file.originalname)
	}
});
var upload=multer({storage: store});

//This is a update API for updating the user information.
router.post('/update',upload.any(),function(req,res){
	var photo=req.files;
	var pic=photo[0].originalname;
	var userdata=req.body;
	userdata.image=pic;
	userservice.update(userdata,(data) => {
		res.send(data);
	})
})

module.exports = router;