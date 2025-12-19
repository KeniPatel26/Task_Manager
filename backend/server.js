const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use('/tasks', taskRoutes);

// Start Server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
