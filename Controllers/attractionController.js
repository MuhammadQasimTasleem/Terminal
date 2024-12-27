const Attraction = require('../models/Attraction'); // Assuming you have a Mongoose model named 'Attraction'

// Controller for attractions
module.exports = {
    // Create a new attraction
    createAttraction: async (req, res) => {
        try {
            const { name, location, description } = req.body;
            const newAttraction = new Attraction({ name, location, description });
            await newAttraction.save();
            res.status(201).json({ message: 'Attraction created successfully', data: newAttraction });
        } catch (error) {
            res.status(500).json({ message: 'Failed to create attraction', error: error.message });
        }
    },

    // Retrieve all attractions
    getAttractions: async (req, res) => {
        try {
            const attractions = await Attraction.find();
            res.status(200).json({ data: attractions });
        } catch (error) {
            res.status(500).json({ message: 'Failed to retrieve attractions', error: error.message });
        }
    },

    // Update an attraction by ID
    updateAttraction: async (req, res) => {
        try {
            const { id } = req.params;
            const updates = req.body;
            const updatedAttraction = await Attraction.findByIdAndUpdate(id, updates, { new: true });
            if (!updatedAttraction) {
                return res.status(404).json({ message: 'Attraction not found' });
            }
            res.status(200).json({ message: 'Attraction updated successfully', data: updatedAttraction });
        } catch (error) {
            res.status(500).json({ message: 'Failed to update attraction', error: error.message });
        }
    },

    // Delete an attraction by ID
    deleteAttraction: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedAttraction = await Attraction.findByIdAndDelete(id);
            if (!deletedAttraction) {
                return res.status(404).json({ message: 'Attraction not found' });
            }
            res.status(200).json({ message: 'Attraction deleted successfully', data: deletedAttraction });
        } catch (error) {
            res.status(500).json({ message: 'Failed to delete attraction', error: error.message });
        }
    }
};
