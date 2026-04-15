const mongoose = require('mongoose')


const postSchema = mongoose.Schema({
    postdata : String,
    user : String,
    date : {
        type : Data,
        default : Date.now
    }
})

module.exports =  mongoose.model("post" , postSchema);