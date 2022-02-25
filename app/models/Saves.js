// mongoose model
const mongoose = require('mongoose');
const Dream = require('./Dream');

const Schema = mongoose.Schema;

/**
 * Title - name of the collection
 * Save - Lists of dreams
 */
const SaveSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    save: {
        type: [Dream],
    }
}, { timestamps: true});

const Saves = mongoose.model('Saves', SaveSchema);

module.exports = Saves;