
const userService = require('../services/userService');

exports.registerUser = async(req, res) => {
    try{
        const {userName} = req.body;

        if (!userName) {
            return res.status(400).json({ error: 'User name is required' });
        }

        const newUser = await userService.registerUser(userName);
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
