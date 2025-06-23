
const Milestone = require('../models/Milestone'); // Import your Milestone model

exports.getMilestones = async (req, res) => {
    try {
        const milestones = await Milestone.find();
        res.json(milestones);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
exports.createMilestone = async (req, res) => {
    const { title, description } = req.body;

    try {
        const newMilestone = new Milestone({ title, description });
        await newMilestone.save();
        res.status(201).json(newMilestone);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

