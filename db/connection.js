const mongoose = require("mongoose");
require("dotenv").config();

const {DB_HOST} = process.env

const connectMongo = async () => {
    return mongoose.connect(DB_HOST)
};

console.log((DB_HOST).toString)

module.exports = {
    connectMongo,
}