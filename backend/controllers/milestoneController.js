const Milestone = require("../models/Milestone"); // Import your Milestone model

exports.getMilestones = async (req, res) => {
  try {
    const milestones = await Milestone.find();
    res.json(milestones);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
exports.createMilestone = async (req, res) => {
  console.log(req.user);
  console.log(req.body);
  const { title, note, date } = req.body;

  try {
    const newMilestone = new Milestone({
      title,
      note,
      date,
      userId: req.user.id,
    });
    await newMilestone.save();
    res.status(201).json(newMilestone);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateMilestone = async (req, res) => {
  const { mId } = req.params;
  try {
    const updatedMilestone = await Milestone.findByIdAndUpdate(mId, req.body, {
      new: true,
    });
    res.json(201).json(updatedMilestone);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteMilestone = async (req, res) => {
  const { mId } = req.params;
  try {
    const deletedMilestone = await Milestone.findByIdAndDelete(mId);
    res.json(201).json(deletedMilestone);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
