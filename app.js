var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();
var userRecord = require("./utils/UserRecord");
var mongodb = require('mongodb');//lets require/import the mongodb native drivers.
var assert = require('assert');
var MongoClient = mongodb.MongoClient;//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var url = 'mongodb://localhost:27017/user_database';


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/web'));

// app.get('/', function (req, res) {
//     res.render('signin');
// });


app.post('/login',function (req, res){
	var email = req.body.email;
	if(req.body.email == '' ||req.body.firstName == '' ||req.body.lastName == '' || req.body.state == '' || req.body.country == '' ||req.body.mobile == ''){
		res.render('signin',{error:true});
	}
	else{
		userRecord.checkEmailId(email, function(err, result){
			if(err){
				res.render('signin',{error:true});
			}
			else if(result != 0){
				res.render('signin',{user:true,email:email});
			}
			else{
				userRecord.insertNewUser(req.body, function(err){
					if(err){
						res.render('signin',{error:true});
					}
					else{
						res.render('signin',{success:true,name:req.body.firstName});
					}
				});
			}
		});
	}
});

app.listen(8000);
