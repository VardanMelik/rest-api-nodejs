const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create Geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});


// create user Schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

const Ninja = mongoose.model('ninja', NinjaSchema);
module.exports = Ninja;