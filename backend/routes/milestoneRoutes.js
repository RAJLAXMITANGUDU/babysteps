const express = require("express");
const {
  getMilestones,
  createMilestone,
  updateMilestone,
  deleteMilestone,
} = require("../controllers/milestoneController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, getMilestones);
router.post("/", authMiddleware, createMilestone);
router.put("/:mId", authMiddleware, updateMilestone);
router.delete("/:mId", authMiddleware, deleteMilestone);

module.exports = router;
