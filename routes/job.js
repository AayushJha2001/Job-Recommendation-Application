const express = require('express');
const router = express.Router();
const Job = require('../models/job');

router.post('/create', async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).send(job);
    } catch (err) {
        res.status(400).send({ error: 'Unable to create job' });
    }
});

router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find({});
        res.send(jobs);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
