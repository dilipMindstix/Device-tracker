var mongodb = require('mongodb');//lets require/import the mongodb native drivers.
var assert = require('assert');
var MongoClient = mongodb.MongoClient;//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var url = 'mongodb://localhost:27017/user_database';


var UserRecord = function(){

	this.insertNewUser = insertNewUser;
	this.checkEmailId = checkEmailId;

	function insertNewUser(body, callback){

		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongodb server ', err);
			}
			else{

				var user = db.collection('user');
				user.insert({"email":body.email,"first_name":body.firstName,"last_name":body.lastName,"country":body.country,"state":body.state,"mobile":body.mobile}, function(err, cal){
					if(err){
						db.close();
						callback(1);
					}
					else{
						db.close();
						callback(null);
					}

				});
			}
		});
	}



	function checkEmailId(email, callback){

		MongoClient.connect(url, function (err, db) {
			if (err) {
			    console.log('Unable to connect to the mongoDB server. Error:', err);
		 	} else {
		 		var user = db.collection('user');
				user.find({"email":email}).count(function (err, count){
					if(err){
						db.close();
						console.log("Conntion loss");
						callback(1,null);
					}	
					else{
						db.close();
						callback(null,count);
					}
				});
			}
		});
	} 

}

module.exports = new UserRecord();
// exports.checkEmailId = checkEmailId;
// exports.insertNewUser = insertNewUser;
// exports.checkEmailId = checkEmailId;