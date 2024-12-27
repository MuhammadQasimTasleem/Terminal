const Visitor = require('../models/visitor'); // Assuming you have a Mongoose model named 'Visitor'

module.exports = {
    // Create a new visitor
    createVisitor: async (req, res) => {
        try {
            const { name, email, phone } = req.body; // Extract visitor details from the request body
            const newVisitor = new Visitor({ name, email, phone });
            await newVisitor.save();
            res.status(201).json({ message: 'Visitor created successfully', data: newVisitor });
        } catch (error) {
            res.status(500).json({ message: 'Failed to create visitor', error: error.message });
        }
    },

    // Retrieve all visitors
    getVisitors: async (req, res) => {
        try {
            const visitors = await Visitor.find(); // Fetch all visitors from the database
            res.status(200).json({ data: visitors });
        } catch (error) {
            res.status(500).json({ message: 'Failed to retrieve visitors', error: error.message });
        }
    },

    // Update a visitor's information by ID
    updateVisitor: async (req, res) => {
        try {
            const { id } = req.params;
            const updates = req.body;
            const updatedVisitor = await Visitor.findByIdAndUpdate(id, updates, { new: true });
            if (!updatedVisitor) {
                return res.status(404).json({ message: 'Visitor not found' });
            }
            res.status(200).json({ message: 'Visitor updated successfully', data: updatedVisitor });
        } catch (error) {
            res.status(500).json({ message: 'Failed to update visitor', error: error.message });
        }
    },

    // Delete a visitor by ID
    deleteVisitor: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedVisitor = await Visitor.findByIdAndDelete(id);
            if (!deletedVisitor) {
                return res.status(404).json({ message: 'Visitor not found' });
            }
            res.status(200).json({ message: 'Visitor deleted successfully', data: deletedVisitor });
        } catch (error) {
            res.status(500).json({ message: 'Failed to delete visitor', error: error.message });
        }
    }
};
