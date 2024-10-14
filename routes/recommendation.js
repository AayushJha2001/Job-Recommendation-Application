const express = require('express');
const router = express.Router();
const Job = require('../models/job');
const User = require('../models/user');

router.get('/recommend/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(404).send({ error: 'User not found' });

        const jobs = await Job.find({});
        const recommendedJobs = jobs.filter(job => {
            let score = 0;

            const matchedSkills = user.skills.filter(skill => job.required_skills.includes(skill));
            if (matchedSkills.length > 0) score += matchedSkills.length;

            if (user.experience_level === job.experience_level) score += 1;

            if (user.preferences.locations.includes(job.location)) score += 1;
            if (user.preferences.desired_roles.includes(job.job_title)) score += 1;

            return score >= 3;
        });

        res.send(recommendedJobs);
    } catch (err) {
        res.status(500).send({ error: 'Error generating recommendations' });
    }
});

module.exports = router;
