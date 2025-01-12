const express = require('express');
const questionRoutes = require('./routes/questionRoutes');

const app = express();
const port = 3000;

// Middleware to parse JSON payloads
app.use(express.json());

// Set up routes
app.use('/questions', questionRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
