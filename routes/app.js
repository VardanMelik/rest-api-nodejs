const express = require('express');
const router = express.Router();
const Ninja = require('../modules/ninja.js');


// GET a list of users from db
router.get('/ninjas', function(req, res, next) {
    //res.send({ type: 'GET' });
    /*Ninja.find({}).then(function(ninja) {
        res.send(ninja);
    });*/
    /*Ninja.geoNear({
        type: "Point",
        coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
    }, { maxDistance: 100000, spherical: true }).then(function(ninja) {
        res.send(ninjas);
    }).catch(error)
    console.log(error);*/

});

// POST add a new user to the db
router.post('/ninjas', function(req, res, next) {

    // When we use req.body at Ninja.create it works work but with json works
    Ninja.create({
        "name": "Vazden",
        "rank": "Blue Line",
        "available": true
    }).then(function(ninja) {
        res.send(ninjas);
    }).catch(next)
});

// Doen't work normal
// Update a user in the db
router.put('/ninjas/:id', function(req, res, next) {
    Ninja.findByIdAndUpdate({ _id: req.params.id }, { "name": "Karen" }).then(function() {
        Ninja.findOne({ _id: req.params.id }).then(function(ninja) {
            res.send(ninjas);
        });

    });
});

// Delete a user from the db function logic
router.delete('/ninjas/:id', function(req, res, next) {
    Ninja.findByIdAndRemove({ _id: req.params.id }).then(function(ninja) {
        res.send(ninjas);
    });
});

module.exports = router;