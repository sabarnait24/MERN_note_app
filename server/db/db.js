
var mongoose = require('mongoose');
// const { MongoClient, ServerApiVersion } = require('mongodb');
mongoose.set('strictQuery', false);
//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/login';
// mongodb://localhost:27017
mongoose.connect(mongoDB, { useNewUrlParser: true });
 //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));