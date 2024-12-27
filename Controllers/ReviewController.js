const Review = require('../models/Review');
const Visitor = require('../models/visitor');
const Attraction = require('../models/attraction');

// Create a new review
exports.createReview = async (req, res) => {
    try {
        const { attractionId, visitorId, score, comment } = req.body;

        // Check if visitor has already reviewed this attraction
        const existingReview = await Review.findOne({ attraction: attractionId, visitor: visitorId });
        if (existingReview) {
            return res.status(400).json({ message: 'You have already reviewed this attraction.' });
        }

        const review = new Review({ attraction: attractionId, visitor: visitorId, score, comment });
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all reviews for an attraction
exports.getReviews = async (req, res) => {
    try {
        const { attractionId } = req.params;
        const reviews = await Review.find({ attraction: attractionId }).populate('visitor', 'name');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a review
exports.updateReview = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const updatedReview = await Review.findByIdAndUpdate(reviewId, req.body, { new: true });
        if (!updatedReview) {
            return res.status(404).json({ message: 'Review not found.' });
        }
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a review
exports.deleteReview = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const deletedReview = await Review.findByIdAndDelete(reviewId);
        if (!deletedReview) {
            return res.status(404).json({ message: 'Review not found.' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};