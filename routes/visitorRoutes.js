const express = require('express');
const router = express.Router();
const visitorController = require('../Controllers/VisitorController');

// Route to create a new visitor
router.post('/', visitorController.createVisitor);

// Route to get all visitors
router.get('/', visitorController.getVisitors);

// Route to update a visitor by ID
router.put('/:id', visitorController.updateVisitor);

// Route to delete a visitor by ID
router.delete('/:id', visitorController.deleteVisitor);

module.exports = router;