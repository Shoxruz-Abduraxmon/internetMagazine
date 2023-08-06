const {Schema, model} = require('mongoose');

const kampaniya = new Schema({
    img : {type: String,
        required: true},
    name: {
        type: String, 
        required: true
    },
    vazifasi: {
        type: String,
        required: true
    },
    maosh: {
        type: Number,
        required: true
    }
});

module.exports = model('Components', kampaniya);