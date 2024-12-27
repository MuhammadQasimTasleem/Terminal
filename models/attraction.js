const mongoose = require('mongoose');

const attractionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    entryFee: {
        type: Number,
        required: true,
        min: 0
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    }
});

const Attraction = mongoose.model('Attraction', attractionSchema);

module.exports = Attraction;