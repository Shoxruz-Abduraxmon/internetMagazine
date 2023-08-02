const {Schema, model} = require('mongoose');

const kampaniya = new Schema({
    img : String,
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