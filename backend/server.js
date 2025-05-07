const express = require('express');
const server = express();
const routes = require('./routes/routes'); // Correct path and variable name
const cors = require('cors');
const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb+srv://surajambrale9003:surajambrale9003@cluster.3a07dkd.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
server.use(cors());
server.use(express.json());
server.use(routes);

// Start server
server.listen(8000, function check(error) {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Server started on port 8000");
  }
});
