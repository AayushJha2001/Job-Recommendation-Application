const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/create', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send({ error: 'Unable to create user' });
    }
});

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