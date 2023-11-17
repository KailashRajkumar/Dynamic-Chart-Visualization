const service = require('../services/UserService');
const bcrypt = require("bcrypt");

// Controller function for user registration
const register = async (req, res) => {
    try {
        const {
            username,
            password
        } = req.body;
        const user = await service.register(username, password);
        res.json(user);
    } catch (err) {
        console.log(err);
    }
}

// Controller function for user login
const login = async (req, res) => {
    try {
        const {
            username,
            password
        } = req.body;

        // Checking if the user exists in the database
        const user = await service.checkuser(username);

        if (!user) {

            res.status(401).json({
                status: false,
                Message: "user not found"
            })
        }
        
        // Comparing the entered password with the hashed password in the database
        const ismatch = await bcrypt.compare(password, user.password)
        if (!ismatch) {
            res.status(400).json({
                status: false,
                Message: "Password missmatch"
            })
        }

        // Generate a token for the user
        let Tdata = {
            id: user._id,
            username: user.username
        }

        console.log(Tdata);
        const token = await service.genaratetoken(Tdata, 'Scode')
        res.status(200).json({
            status: true,
            token: token
        })

    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    register,
    login
}