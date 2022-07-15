//mongoose model
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 1,
            trim: true,
            // Assumed no need to be unique here, use email to log in
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
            select: false,
        },
        email: {
            type: String,
            required: true,
            unique: true, // TODO: Not working, using if statement in function to prevent duplicate here, retest later if needed
            trim: true,
            minLength: 3,
        },
        isAdmin: {
            // Can be removed if don't need admin functionality
            type: Boolean,
            required: true,
            default: false,
        },
        saves: {
            // A user can have multiple saves entities. Store the ObjectIDs of the entity Saves.
            type: [mongoose.Schema.Types.ObjectId],
            default: [],
        },
        // profile image?
    },
    {
        // Track creation and update time of fields/
        timestamp: true,
    }
)

// Encrypt password every time it is saved
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

// // Encrypt password every time it is changed
UserSchema.pre('findOneAndUpdate', async function (next) {
    if (this._update.password) {
        const salt = await bcrypt.genSalt(10)
        this._update.password = await bcrypt.hash(this._update.password, salt)
    }
    next()
})

//Compare the input password with password in database.
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', UserSchema)

module.exports = User
