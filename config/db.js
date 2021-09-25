const mongoose = require("mongoose")
require("dotenv").config({path:"variables.env"})

const connectDataBase = async()=>{
    try {
        await mongoose.connect(process.env.DB_Mongo, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDataBase