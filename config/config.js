const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Data base connected with success.');
    } catch (error) {
        console.error(error);
        throw new Error('Error on DB startup.');
    }
};

module.exports = dbConnection;