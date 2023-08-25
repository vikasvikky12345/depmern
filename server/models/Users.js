const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    title:String,
    description:String,
})
const Usermodel = mongoose.model("users",UserSchema)
module.exports = Usermodel