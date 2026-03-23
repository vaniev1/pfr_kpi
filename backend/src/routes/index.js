const express = require('express');
const router = express.Router();

router.use('/kpi', require('./kpi'));

module.exports = router;