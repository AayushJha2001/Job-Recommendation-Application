const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/user');
const jobRoutes = require('./routes/job');
const recommendationRoutes = require('./routes/recommendation');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/jobs', jobRoutes);
app.use('/recommendations', recommendationRoutes);

mongoose.connect('mongodb://localhost:27017/job_recommendation', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log(err);
});

app.get('/', (req, res) => {
    res.send("Job Recommendation API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




