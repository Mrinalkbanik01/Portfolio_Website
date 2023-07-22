const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name : {
        type:"String",
        required:"true"
    },
    email: {
        type:"String",
        required:"true",
        // default:"Anonymous Message"
    },
    message:{
        type:"String",
        required:"true"
    }
})

module.exports = mongoose.model('Message' ,messageSchema );