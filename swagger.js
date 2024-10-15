const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Job Recommendation',
      description: 'API documentation',
      version: '1.0.0',
      contact: {
        name: 'Developer',
      },
      servers: [
        { 
          url: 'http://localhost:5000',
          description: 'Local Server',
        },
      ],
    },
  },
  apis: ['./routes/*.js'], // Path to the API docs (your routes files)
};

// Swagger docs
const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = { swaggerDocs, swaggerUi };
