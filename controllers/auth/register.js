const bcrypt = require("bcrypt")

const {User} = require("../../models/user")

const {RequestError} = require("../../helpers")

const register = async(req, res) => {
    const {email, password} = req.body;

    const user = User.findOne({email});

        if(user) {
            throw RequestError(409, "Email is already in use")
        }
    
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({...req.body, password: hashPassword})

    res.status(201).json({
        email: newUser.email
    })
}

module.exports = register;