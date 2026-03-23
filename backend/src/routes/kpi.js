const express = require('express');
const router = express.Router();
const kpiService = require('../services/kpiService');

router.get('/dashboard/org', async (req, res) => {
    try {
        const period = req.query.period || '2026-01';
        const data = await kpiService.getOrgDashboard(period);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/data/submit', async (req, res) => {
    const { period, departmentId, entries } = req.body;
    try {
        await kpiService.submitData(period, departmentId, entries);
        res.json({ status: 'saved' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;