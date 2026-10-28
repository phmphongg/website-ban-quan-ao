const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/webbtl');
        console.log('MongoDB Connected to User App...');
    } catch (err) {
        console.error('MongoDB connection error (User App):', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;