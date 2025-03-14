const User = require('../model/userModel'); 

exports.registerUser = async (userName) => {
  try {
    const checkUser = await User.findOne({
      where: { user_name: userName }, 
    });

    if (checkUser) {
      throw new Error('Username already taken'); 
    }

    const newUser = await User.create({
      user_name: userName, 
    });

    return newUser;   } catch (error) {
    console.error('Error registering user:', error.message);
    throw new Error(error.message); 
  }
};
