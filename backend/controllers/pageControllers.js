const path = require('path');
const frontendPath = path.join(__dirname, "../../Frontend/Pages");
const signup = (req, res) =>{
  res.sendFile(path.join(frontendPath, "signup.html"));
};

const dashboard = (req, res) =>{
  res.sendFile(path.join(frontendPath, "dashboard.html"));
}

module.exports = {
  signup,
  dashboard,
};