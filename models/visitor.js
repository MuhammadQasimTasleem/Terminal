const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/ // Simple email validation
    },
    visitedAttractions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attraction'
    }]
}, { timestamps: true });

const Visitor = mongoose.model('Visitor', visitorSchema);

module.exports = Visitor;