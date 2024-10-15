const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express'); 

const { swaggerDocs, swaggerUi } = require('./swagger')

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/user');
const jobRoutes = require('./routes/job');
//const recommendationRoutes = require('./routes/recommendation');


app.use('/users', userRoutes);
app.use('/jobs', jobRoutes);
//app.use('/recommendations', recommendationRoutes);


// setup Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

mongoose.connect('mongodb://localhost:27017/job_recommendation', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => { 
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log(err);
});

// // Swagger definition
// const swaggerOptions = {
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'Job Recommendation',
//       description: 'API documentation',
//       version: '1.0.0',
//       servers: [
//         { 
//           url: 'http://localhost:5000',
//           // description: 'Local Server',
//         },
//       ],
//     },
//   },
//   apis: ['./routes/*.js'], // Path to the API docs (your routes files)
// };

// // Swagger docs
// const swaggerSpec = swaggerJSDoc(swaggerOptions);

// // Serve Swagger UI
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
    res.send("Job Recommendation API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




