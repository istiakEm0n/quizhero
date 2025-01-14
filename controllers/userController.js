const userService = require('../services/userService');

exports.registerUser = async(req, res)=>{
    try{
        const {userId, userName} = req.body;

        if (!userId || !userName) {
            return res.status(400).json({ error: 'userId and userName are required' });
        }
        const user = await userService.registerUser(userId,userName);
        res.status(201).json({ message: 'User registered successfully', user });
    
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}