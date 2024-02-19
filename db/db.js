const mongoose = require('mongoose'); 
require('dotenv').config(); 
const User = require('../models/userModel');


const connect = async () => {  

    await mongoose.connect(process.env.MONGO_URL); 
}
// finds the user based on the object passed 
/// the object can be anything, it can be email, password, firstname, lastname, etc
const findUser= async (obj) => { 
   await User.findOne(obj);
};

// Saves user 

const saveUser = async (newUser) => { 
  return  await newUser.save();
};

const disconnect = async () => { 

    await mongoose.disconnect(); 
}



module.exports = { connect, disconnect, findUser, saveUser};
