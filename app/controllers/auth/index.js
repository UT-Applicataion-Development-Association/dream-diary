const UserServices = require("../../services").User
const { Response } = require("../../utils/response")
const generateToken = require("../../utils/generateToken").generateToken

const registerUser = async(req,res) => {
    try{
        const {name, password,email} = req.body;
        if(!(name && password && email)){
            throw new Error('All input is needed')
        }
        // TODO: add vailidation for email&password format
        const userServices = new UserServices();

        const userExists = await userServices.getUser({email});

        if(userExists) {
            //TODO ： change status code to 400 for this error in catch
            throw new Error('There is existing user using this email')
        }
        
        const user = await userServices.createUser(name,password,email)

        res.status(201).json({
                _id:user.id,
                name:user.name,
                email: user.email,
                isAdmin: user.isAdmin,
        }) //TODO: add another check for user creation? Any case where creation failed but
        // no error returned?
    } 
    catch (err) {
        console.error(err)
        res.status(500).send(new Response({ msg: err.message, status: 500 }));
    }
};

const authUser = async(req,res) => {
    try{
        const {email, password} = req.body;
        const userServices = new UserServices();

        const user = await userServices.getUser({email});
        if(user && (await user.matchPassword(password))){
            res.status(201).json({
                _id:user.id,
                name:user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id,user.email)
            })
        }
        else{
            throw new Error('Invalid email or password')
            // TODO: split the error based on unregistered email / invalid password
        }
    } 
    catch (err) {
        console.error(err)
        res.status(500).send(new Response({ msg: err.message, status: 500 }));
    }
};

const updateUser = async(req,res) => {
    // Plase don't include email in req body
    // Won't return error buty
    try{
        const userServices = new UserServices();
        const email = req.email

        const updatedUser = await userServices.updateUser({email},req.body)
        if(updatedUser){
            res.status(201).json({
                _id:updatedUser.id,
                name:updatedUser.name,
                email: updatedUser.email,
                isAdmin: updatedUser.isAdmin,
            }) 
        }
        else{
            throw new Error('Error occured when updating user');
            //TODO: split error status code.
        }

    } 
    catch (err) {
        console.error(err)
        res.status(500).send(new Response({ msg: err.message, status: 500 }));
    }
};


module.exports = {registerUser, authUser, updateUser};