var express = require('express');
var router= express.Router();
var providerService = require('../Services/provider');

// cutomer can login here 
router.post('/login', (req, res) => {
	    if(req.headers.uniqueauthkey == providerService.unique_key_for_login){
			providerService.login(req.body, (data) => {
           	res.send(data);
    		});
 		}
 		else{
 			res.send("authentication required");
 		}
});

module.exports = router;