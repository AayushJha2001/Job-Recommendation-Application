const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    job_id : Number,
    job_title: String,
    company: String,
    location: String,
    job_type: String,
    required_skills: [String],
    experience_level: String
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;