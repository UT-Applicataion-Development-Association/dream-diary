const { mongoose } = require('../db/mongoose')
const { User } = require('../models')  

// TODO : Database level error handle? 

module.exports = {
    /**
     * Register a new user to db.
     * @param {*} body Body of the new user.
     * @returns The created user.
     */
    create: async (body) => {    
        
        // Create an user if email is not exist. 
        const user = new User(body)

        // Save to db
        const newUser = await user.save()
        return newUser
    },

    retrieve: async (email) => {
        // TODO: IMPLEMENT THIS
        try{
            const user = await User.findOne(email)
            return user
        }
        catch(e){
            throw(e)
        }
    },

    update: async (filter,body) => {
        // TODO: IMPLEMENT THIS
        try{
            const user = await User.findOneAndUpdate(filter,body, { new: true })
            return user
        }
        catch(e){
            throw(e)
        }
    },

    delete: async (email) => {
        // TODO: IMPLEMENT THIS
        try{
            User.findOneAndRemove(email)
        }
        catch(e){
            throw(e)
        }
        
    },
}
