// mongoose model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * User - id of the User
 * Title - name of the collection
 * dreams - Lists of dreams
 * CreatedAt
 * UpdatedAt
 */
const CollectionSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    dreams: {
        type: [mongoose.Schema.Types.ObjectId], // Store all Dream ObjectIDs in here.
    }
}, { timestamps: true});

const Collection = mongoose.model('Collection', CollectionSchema);

module.exports = Collection;