let express = require('express'),
    router = express.Router(),
    userService = require('../Services/consumer');

 /* Find particular Consumer information */
router.post('/find', function(req, res){
	if(req.headers.token == userService.token){
    userService.findInfo(req.body, function(data){
        res.send(data);
    })
 }
});

/* View all the Consumer information */
router.get('/getList', function(req, res){
   if(req.headers.token == userService.token){
    userService.listAll(req.query, function(data){
        res.send(data);
    });
 }
}); 

module.exports = router ;



