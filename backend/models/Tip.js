const mongoose = require('mongoose');

const TipSchema = new mongoose.Schema({
    milestoneId: { type: mongoose.Schema.Types.ObjectId, ref: 'Milestone' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Tip', TipSchema);
