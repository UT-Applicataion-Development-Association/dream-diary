//mongoose model
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            minLength: 1,
            trim: true
            // Assumed no need to be unique here, use email to log in? 
        },
        password:{
            type: String,
            required:true,
            minLength: 6
        },
        email:{ 
            type:String,
            required:true,
            unique:true //TODO ： Not working, using if statement in function to prevent duplicate here, retest later if needed
        },
        dreams:{
            type:Array, //can be required if don't need admin.
            default:[],
        },
        isAdmin:{
            // Can be removed if don't need admin functionaity
            type:Boolean,
            required: true,
            default: false
        }
        // profile image?
    },
    {
        // Track creation and update time of fields/
        timestamp: true
    }
)

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
  
//Encrtpt password everytime it is saved
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User",userSchema);

module.exports = User;

