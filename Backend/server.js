const express = require('express');
const dotenv = require('dotenv').config({path : '../.env'});
const path = require('path');

const app = express();
const port = process.env.PORT;
const frontendPath = path.join(__dirname, "../");

app.use(express.static(frontendPath));
app.use(express.static(path.join(frontendPath,"/Frontend")));
app.use(express.json());

app.use((req,res,next) => {
  console.log(req.url);
  next();
});
app.get('/',(req,res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.get('/signup', (req,res) => {
  res.sendFile(path.join(frontendPath, "Frontend/Pages/signup.html"));
})
app.listen(port, () => {
  console.log(`Server is alive on port number ${port}`);
});