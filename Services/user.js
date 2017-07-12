var usermodel=require('../Model/customer');
var model =usermodel.model;
//Update function for updating the user record.
var update= (body, callback) => {
	var fname = body.fname;
	var lname = body.lname;
	var email = body.email;
	var newemail = body.nemail;
	var mobile = body.phone;
	mobile = mobile.toString();
	var image = body.image;

	//Condition to check the mobile number valid or not.
	if(mobile != undefined){
		if(mobile.length < 10) {
		    callback("Please enter the valid mobile number");
		    return;
	    }
	}

	//Condition to check the email_id valid or not.
    if(email !=undefined) {
    	var check_email = email.slice(-10);

	    if(check_email != "@gmail.com") {
	        callback("Please enter the valid email_id");
	        return;	
	    }
    }

	//Find the user Info
	console.log(email);
	model.find({"email" : email}, function(err, data) {
		console.log(data);
		if(err)
			callback(err);

		if(data.length== 0)
			callback("Please enter the valid email");

		//check the first name of user 
		if(fname == undefined) {
			fname = data[0].firstname;
		}

		//check the last name of user
		if(lname == undefined) {
			lname = data[0].lastname;
		}

		//check the new email of user 
		if(newemail == undefined) {
			newemail = data[0].email;
		}

		//check the phone number of user 
		if(mobile == undefined) {
			mobile = data[0].mobile;
		}

		//check the image of user 
		if(image == undefined) {
			image = data[0].image;
		}

		//Query to update the user record
		usermodel.model.update({"email" : email}, {$set : {"firstname" : fname, "lastname" : lname, "email" : newemail, "mobile" : mobile, "image" : image}}, (err,details) => {
		    	if(err)
		    		callback(err);
		    	else
		    		callback("Your record has been updated");
		})
	})
}

module.exports = {
	update : update
}