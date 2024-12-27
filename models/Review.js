const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    attraction: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attraction',
        required: true
    },
    visitor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Visitor',
        required: true
    },
    score: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500
    }
}, { timestamps: true });

reviewSchema.index({ attraction: 1, visitor: 1 }, { unique: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;