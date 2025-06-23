
const express = require('express');
const { getMilestones, createMilestone } = require('../controllers/milestoneController');
const authMiddleware = require('../middleware/authMiddleware'); 
const router = express.Router();

router.get('/', authMiddleware, getMilestones); 
router.post('/', authMiddleware, createMilestone); 

module.exports = router;
