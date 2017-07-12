let app = require ('express')();
let bodyParser = require ('body-parser');
let customerRoutes = require('./Routes/customer');
let consumerRoutes = require('./Routes/consumer');

app.use (bodyParser.urlencoded({
	extended : false
}));

app.use (bodyParser.json());
/* middleware for customer routes */
app.use('/customer', customerRoutes);

/* middleware for consumer routes */
app.use('/consumer', consumerRoutes);

/*first API to check if server is running*/
app.get ('/', function (req, res){
	res.send("server is running")
});

app.listen (8080);

