const userModel = require('../models/userModel');

const signup = (req, res) => {
  const {email, username, password} = req.body;

  if(!email || !username || !password){
    return res.status(400).json({
      message : "All fields are required to be filled"
    });
  }
  userModel.createUser(
    email,
    username,
    password,
    (err, result) => {
      if(err){
        console.log(`Problem encountered while insertion\n${err}`);
        return res.status(500).json({
          message : `Unable to create account`
        });
      }

      console.log(`User created with id: ${result.insertId}`);
      res.status(201).json({
        message : `Account created successfully!`
      });
    }
  );
};

const login = (req, res) => {
  const {username, password} = req.body;

  if(!username || !password){
    return res.status(400).json({
      message: "Enter username and password"
    });
  }

  userModel.checkUser(
    username,
    password,
    (err, result) => {
      if(err){
        console.log(`ERROR encountered while accessing database\n${err}`);
        return res.status(500).json({
          message: 'Something went wrong'
        });
      }

      if(result.length === 0){
        return res.status(200).json({
          message: 'User name not found'
        });
      }
      const userData = result[0];
      if(userData.password === password){
        delete userData.password;
        return res.status(200).json({
          message : 'true',
          user : userData
        });
      }
      return res.status(200).json({
        message: 'Password is incorrect'
      });
    }
  );
};

module.exports = {
  signup,
  login,
};