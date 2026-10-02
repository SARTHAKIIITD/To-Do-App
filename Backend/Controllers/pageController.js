const path = require("path");
const frontendPath = path.join(__dirname, "../../");

const signup = (req,res) => {
  res.sendFile(path.join(frontendPath, "Frontend/Pages/signup.html"));
};

module.exports = {signup};