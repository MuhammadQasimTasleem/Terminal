const express = require('express');
const router = express.Router();
const reviewController = require('../Controllers/ReviewController');

// Route to create a new review
router.post('/', reviewController.createReview);

// Route to get all reviews for an attraction
router.get('/:attractionId', reviewController.getReviews);

// Route to update a review
router.put('/:reviewId', reviewController.updateReview);

// Route to delete a review
router.delete('/:reviewId', reviewController.deleteReview);

module.exports = router;