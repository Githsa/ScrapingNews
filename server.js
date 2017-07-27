
// Scraping News app

// Dependencies
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var logger = require('morgan'); // for debugging
var request = require('request'); // for web-scraping
var cheerio = require('cheerio'); // for web-scraping


// Initializing Express 
var app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}))

// Serve Static Content
app.use(express.static(process.cwd() + '/public'));

// Express-Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


if(process.env.NODE_ENV == 'production'){
  mongoose.connect('mongodb://heroku_zkwljgp2:5lrcg9je95btv0mtgoqs5pgvq8@ds119223.mlab.com:19223/heroku_zkwljgp2');
}
else{
  mongoose.connect('mongodb://localhost/news-scraper');
  
}
var db = mongoose.connection;


db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});


db.once('open', function() {
  console.log('Mongoose connection was successful.');
});

// Import the Comment and Article models
var Comment = require('./models/Comment.js');
var Article = require('./models/Article.js');



// Import Routes/Controller
var router = require('./controllers/controller.js');
app.use('/', router);


// Launch App
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Running on port: ' + port);
});
