const userModel = require("../Models/userModel");

const signup = (req, res) => {

    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Name, email and password are required"
        });
    }

    userModel.createUser(
        name,
        email,
        password,
        (err, result) => {

            if (err) {
                console.error("Database error:", err);

                return res.status(500).json({
                    message: "Failed to create account"
                });
            }

            console.log("User inserted:", result.insertId);

            res.status(201).json({
                message: "Signup successful"
            });
        }
    );
};

const login = (req,res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(400).json({
            message: "username and password are required"
        });
    }
    
    userModel.loginUser(
        username,
        (err, result) => {
            if(err){
                console.error("Database erorr :", err);
                return res.status(500).json({
                    message: "Failed to access data"
                });
            }

            const user = result[0];
            if(user.password === password){
                return res.json({
                    message: user.id
                });
            }
        }
    );
};

module.exports = {
    signup,
    login,
};
