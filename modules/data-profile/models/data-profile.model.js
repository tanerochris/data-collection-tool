const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../../../core/env/default')


let DataProfile = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    category:{
        type:String,
        required: false
    }, 
    contributors:{
        type: Array,
        required: false
    },
    fields: {
        type: Array,
        required: false
    },
    fieldCount: {
        type: Number,
        required: true,
        default: 0
    },
    created_at:{
        type: Date,
        required:true,
        default: Date.now()
    },
});

module.exports = mongoose.model('Data-Profile', DataProfile);