
const Tip = require('../models/Tip');
const Milestone = require('../models/Milestone'); 

exports.getTipsForMilestone = async (req, res) => {
    const { milestoneId } = req.params;

    try {
        const tips = await Tip.find({ milestone: milestoneId });
        res.json(tips);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createTip = async (req, res) => {
    const { milestoneId, content } = req.body;

    try {
        const newTip = new Tip({ milestone: milestoneId, content });
        await newTip.save();
        res.status(201).json(newTip);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
