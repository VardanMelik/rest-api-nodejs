const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Set up express app
const app = express();

// Connect to mongodb
mongoose.connect('mongodb://localhost:27017/ninjago', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

// Using static folder
app.use(express.static('public'));


app.use(bodyParser.json({ type: 'application/*+json' }))
    //app.use(bodyParser.json());

// Initilize routes
app.use('/api', require('./routes/app'));

// Error handling middleware
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(422).send({ error: err.mongoose });
    console.log("Error list console");


});

// listen for request 
app.listen(process.env.port || 4000, function() {
    console.log('Server is running on port 4000');
});