const express = require('express');
const questionRoutes = require('./routes/questionRoutes');
const userRouters = require('./routes/userRoutes');

const app = express();
const port = 3000;
app.use(express.json());

app.use('/quizhero', questionRoutes);
app.use('/users', userRouters);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

