const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    location:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Posts', PostSchema);