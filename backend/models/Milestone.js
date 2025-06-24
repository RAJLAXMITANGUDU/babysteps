const mongoose = require("mongoose");

const MilestoneSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User ",
    required: true,
  },
  title: { type: String, required: true },
  date: { type: Date, required: true },
  note: { type: String },
});

module.exports = mongoose.model("Milestone", MilestoneSchema);
