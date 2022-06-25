// mongoose model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * author - id of the author
 * Title - name of the collection
 * ofDream - Lists of dreams
 * CreatedAt
 * UpdatedAt
 */
const SaveSchema = new Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
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