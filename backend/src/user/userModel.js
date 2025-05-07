const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true // Optional: adds createdAt and updatedAt
});

// Collection name: 'users'
module.exports = mongoose.model('User', userSchema);
