const express = require('express');
const router = express.Router();
const Job = require('../models/job');

/**
 * @swagger
 * /jobs/create:
 *   post:
 *     summary: Create a new job posting
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               job_title:
 *                 type: string
 *                 example: Software Engineer
 *               company:
 *                 type: string
 *                 example: Tech Solutions Inc.
 *               required_skills:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["JavaScript", "React", "Node.js"]
 *               location:
 *                 type: string
 *                 example: San Francisco
 *               job_type:
 *                 type: string
 *                 example: Full-Time
 *               experience_level:
 *                 type: string
 *                 example: Intermediate
 *     responses:
 *       200:
 *         description: The job was created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 job_title:
 *                   type: string
 *                 company:
 *                   type: string
 *                 required_skills:
 *                   type: array
 *                 location:
 *                   type: string
 *                 job_type:
 *                   type: string
 *                 experience_level:
 *                   type: string
 *               example:
 *                 _id: "64fc99cd3f08e43e1c5e92b5"
 *                 job_title: "Software Engineer"
 *                 company: "Tech Solutions Inc."
 *                 required_skills: ["JavaScript", "React", "Node.js"]
 *                 location: "San Francisco"
 *                 job_type: "Full-Time"
 *                 experience_level: "Intermediate"
 */

router.post('/create', async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).send(job);
    } catch (err) {
        res.status(400).send({ error: 'Unable to create job' });
    }
});


/**
 * @swagger
 * /jobs:
 *   get:
 *     summary: Get all job postings
 *     tags: [Jobs]
 *     responses:
 *       200:
 *         description: A list of all job postings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   job_title:
 *                     type: string
 *                   company:
 *                     type: string
 *                   required_skills:
 *                     type: array
 *                     items:
 *                       type: string
 *                   location:
 *                     type: string
 *                   job_type:
 *                     type: string
 *                   experience_level:
 *                     type: string
 *               example:
 *                 - _id: "64fc99cd3f08e43e1c5e92b5"
 *                   job_title: "Software Engineer"
 *                   company: "Tech Solutions Inc."
 *                   required_skills: ["JavaScript", "React", "Node.js"]
 *                   location: "San Francisco"
 *                   job_type: "Full-Time"
 *                   experience_level: "Intermediate"
 *                 - _id: "64fc99cd3f08e43e1c5e92b6"
 *                   job_title: "Data Scientist"
 *                   company: "Data Analytics Corp."
 *                   required_skills: ["Python", "Data Analysis", "Machine Learning"]
 *                   location: "Remote"
 *                   job_type: "Full-Time"
 *                   experience_level: "Intermediate"
 *       500:
 *         description: Internal server error
 */

router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find({});
        res.send(jobs);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
