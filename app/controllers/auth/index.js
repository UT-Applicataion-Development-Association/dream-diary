const UserServices = require("../../services").User
const { Response } = require("../../utils/response")

const registerUser = async(req,res) => {
    try{
        const {name, password,email} = req.body;
        const userServices = new UserServices();

        const userExists = await userServices.findUser({email});

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
                password:user.password //to remove, just for check ecrypt
        })
    } 
    catch (err) {
        console.error(err)
        res.status(500).send(new Response({ msg: err.message, status: 500 }));
    }
};

module.exports = {registerUser};