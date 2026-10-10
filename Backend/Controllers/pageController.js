const path = require("path");
const frontendPath = path.join(__dirname, "../../");

const signup = (req,res) => {
  res.sendFile(path.join(frontendPath, "Frontend/Pages/signup.html"));
};

const dashboard = (req, res) => {
  console.log("welcome to the dashboard");
  res.sendFile(path.join(frontendPath, "Frontend/Pages/dashboard.html"));
}
module.exports = {
  signup,
  dashboard
};