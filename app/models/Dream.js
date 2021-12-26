/* Student mongoose model */
const mongoose = require('mongoose')

/**
 * 
- Content
- Date (input, has default to today)
- Optional title
- Image
  - User randomly fetch images.
  - Emotion - color. A list of emotion -> a colorful image/渐变.
    - Label, tag
  - Emoji
- Dreamer
 */
const Dream = mongoose.model('Dream', {
    title: {
        type: String,
        trim: true
    },
    dreamer: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true
    },
    content: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    tags: [String],
    image: {
        type: String,
        default: "",
    }
})

module.exports = Dream
