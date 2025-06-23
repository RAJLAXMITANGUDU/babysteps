
const express = require('express');
const { getTipsForMilestone, createTip } = require('../controllers/tipController');
const router = express.Router({ mergeParams: true }); // Allows access to params from parent route

router.get('/', getTipsForMilestone);
router.post('/', createTip);

module.exports = router;
