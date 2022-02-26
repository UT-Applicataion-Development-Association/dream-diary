// mongoose model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * Title - name of the collection
 * Save - Lists of dreams
 * CreatedAt
 * UpdatedAt
 */
const SaveSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ofDream: {
        type: [mongoose.Schema.Types.ObjectId], // Store all Dream ObjectIDs in here.
    }
}, { timestamps: true});

const Saves = mongoose.model('Saves', SaveSchema);

module.exports = Saves;