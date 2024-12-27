const express = require('express');
const router = express.Router();
const attractionController = require('../Controllers/attractionController');

// Route to create a new attraction
router.post('/', attractionController.createAttraction);

// Route to get all attractions
router.get('/', attractionController.getAttractions);

// Route to update an attraction by ID
router.put('/:id', attractionController.updateAttraction);

// Route to delete an attraction by ID
router.delete('/:id', attractionController.deleteAttraction);

module.exports = router;
