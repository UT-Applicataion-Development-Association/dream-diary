//mongoose model
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const Saves = require('./Saves');

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            minLength: 1,
            trim: true
            // Assumed no need to be unique here, use email to log in 
        },
        password:{
            type: String,
            required:true,
            minLength: 6
        },
        email:{ 
            type:String,
            required:true,
            unique:true, //TODO ： Not working, using if statement in function to prevent duplicate here, retest later if needed
            immutable: true
        },
        isAdmin:{
            // Can be removed if don't need admin functionaity
            type:Boolean,
            required: true,
            default: false
        },
        saves:{  // A user can have multiple saves entities. Store the ObjectIDs of the entity Saves.
            type: [mongoose.Schema.Types.ObjectId],
            default: null
        }
        // profile image?
    },
    {
        // Track creation and update time of fields/
        timestamp: true
    }
)

//Encrtpt password everytime it is saved
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

//Encrtpt password everytime it is changed
userSchema.pre("findOneAndUpdate", async function (next) {
    if(this._update.password){
        const salt = await bcrypt.genSalt(10);
        this._update.password = await bcrypt.hash(this._update.password, salt);
    }
    next();
});

//Compare the input password with password in databse.
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User",userSchema);

module.exports = User;

