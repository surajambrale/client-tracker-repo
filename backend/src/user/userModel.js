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
    },
    trainingStartDate: {
        type: Date,
        required: true
    },
    trainingEndDate: {
        type: Date,
        required: true
    },
    paymentDone: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt
});

module.exports = mongoose.model('User', userSchema);
