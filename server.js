const app = require('./app')

const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const DB_HOST = "mongodb+srv://PeterZabila:5g8lJFbLU8yh6OUG@cluster1.pqow9jq.mongodb.net/"


const {PORT = 3000} = process.env

mongoose.connect(DB_HOST)
.then(() => {console.log("Database connection successful");
app.listen(PORT)}
)
.catch((error) => { 
    console.log(error.message)
    process.exit(1)
})
