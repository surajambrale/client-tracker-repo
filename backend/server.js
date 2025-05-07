const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes'); // Assuming your existing routes are here

const app = express();
app.use('/api', routes); // Check if this line is correct

// ✅ Allowed Origins
const allowedOrigins = [
  'http://localhost:4200', // Dev
  'https://client-tracker-repo.vercel.app' // Your deployed frontend (replace if needed)
];

// ✅ CORS Middleware
app.use(cors({
  origin: function (origin, callback) {
    console.log("Origin:", origin);  // Log the origin
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));


// ✅ Preflight CORS handling (important!)
app.options('*', cors()); 

// ✅ Middleware
app.use(bodyParser.json());
app.use(routes); // Your existing route handlers

// ✅ MongoDB connection
mongoose.connect('mongodb+srv://surajambrale9003:surajambrale9003@cluster.3a07dkd.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// ✅ Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
