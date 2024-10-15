const express = require('express');
const router = express.Router();
const User = require('../models/user');


/**
 * @swagger
 * /users/create:
 *   post:
 *     summary: Create a new user profile
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["JavaScript", "Node.js", "React"]
 *               experience_level:
 *                 type: string
 *                 example: Intermediate
 *               preferences:
 *                 type: object
 *                 properties:
 *                   desired_roles:
 *                     type: array
 *                     items:
 *                       type: string
 *                     example: ["Software Engineer", "Full Stack Developer"]
 *                   locations:
 *                     type: array
 *                     items:
 *                       type: string
 *                     example: ["San Francisco", "Remote"]
 *                   job_type:
 *                     type: string
 *                     example: Full-Time
 *     responses:
 *       200:
 *         description: The user profile was created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 skills:
 *                   type: array
 *                 experience_level:
 *                   type: string
 *                 preferences:
 *                   type: object
 *               example:
 *                 _id: "64fc99cd3f08e43e1c5e92b4"
 *                 name: "John Doe"
 *                 skills: ["JavaScript", "Node.js", "React"]
 *                 experience_level: "Intermediate"
 *                 preferences:
 *                   desired_roles: ["Software Engineer", "Full Stack Developer"]
 *                   locations: ["San Francisco", "Remote"]
 *                   job_type: "Full-Time"
 */

router.post('/create', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send({ error: 'Unable to create user' });
    }
});


/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user profile by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *         example: 64fc99cd3f08e43e1c5e92b4
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 skills:
 *                   type: array
 *                   items:
 *                     type: string
 *                 experience_level:
 *                   type: string
 *                 preferences:
 *                   type: object
 *                   properties:
 *                     desired_roles:
 *                       type: array
 *                       items:
 *                         type: string
 *                     locations:
 *                       type: array
 *                       items:
 *                         type: string
 *                     job_type:
 *                       type: string
 *               example:
 *                 _id: "64fc99cd3f08e43e1c5e92b4"
 *                 name: "John Doe"
 *                 skills: ["JavaScript", "Node.js", "React"]
 *                 experience_level: "Intermediate"
 *                 preferences:
 *                   desired_roles: ["Software Engineer", "Full Stack Developer"]
 *                   locations: ["San Francisco", "Remote"]
 *                   job_type: "Full-Time"
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send();
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;