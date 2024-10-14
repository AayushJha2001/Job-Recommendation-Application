const mongoose = require('mongoose');
const Job = require('./models/job'); 

mongoose.connect('mongodb://localhost:27017/job_recommendation', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log(err);
});

const jobPostings = [
  {
    job_title: "Software Engineer",
    company: "Tech Solutions Inc.",
    required_skills: ["JavaScript", "React", "Node.js"],
    location: "San Francisco",
    job_type: "Full-Time",
    experience_level: "Intermediate"
  },
  {
    job_title: "Data Scientist",
    company: "Data Analytics Corp.",
    required_skills: ["Python", "Data Analysis", "Machine Learning"],
    location: "Remote",
    job_type: "Full-Time",
    experience_level: "Intermediate"
  },
  {
    job_title: "Frontend Developer",
    company: "Creative Designs LLC",
    required_skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
    location: "New York",
    job_type: "Part-Time",
    experience_level: "Junior"
  },
  {
    job_title: "Backend Developer",
    company: "Web Services Co.",
    required_skills: ["Python", "Django", "REST APIs"],
    location: "Chicago",
    job_type: "Full-Time",
    experience_level: "Senior"
  },
  {
    job_title: "Machine Learning Engineer",
    company: "AI Innovations",
    required_skills: ["Python", "Machine Learning", "TensorFlow"],
    location: "Boston",
    job_type: "Full-Time",
    experience_level: "Intermediate"
  },
  {
    job_title: "DevOps Engineer",
    company: "Cloud Networks",
    required_skills: ["AWS", "Docker", "Kubernetes"],
    location: "Seattle",
    job_type: "Full-Time",
    experience_level: "Senior"
  },
  {
    job_title: "Full Stack Developer",
    company: "Startup Hub",
    required_skills: ["JavaScript", "Node.js", "Angular", "MongoDB"],
    location: "Austin",
    job_type: "Full-Time",
    experience_level: "Intermediate"
  },
  {
    job_title: "Data Analyst",
    company: "Finance Analytics",
    required_skills: ["SQL", "Python", "Tableau"],
    location: "New York",
    job_type: "Full-Time",
    experience_level: "Junior"
  },
  {
    job_title: "Quality Assurance Engineer",
    company: "Reliable Software",
    required_skills: ["Selenium", "Java", "Testing"],
    location: "San Francisco",
    job_type: "Contract",
    experience_level: "Intermediate"
  },
  {
    job_title: "Systems Administrator",
    company: "Enterprise Solutions",
    required_skills: ["Linux", "Networking", "Shell Scripting"],
    location: "Remote",
    job_type: "Full-Time",
    experience_level: "Senior"
  }
];

Job.insertMany(jobPostings)
    .then(() => {
        console.log("Job postings data seeded successfully!");
        mongoose.connection.close();
    })
    .catch(err => {
        console.error("Error seeding job postings data: ", err);
        mongoose.connection.close();
    });
