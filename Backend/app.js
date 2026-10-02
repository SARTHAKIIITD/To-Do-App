const express = require('express');
const path = require('path');

const frontendPath = process.env.FRONTEND_PATH;
const app = express();

const pageRoutes = require("./Routes/pageRoutes");
const authRoutes = require("./Routes/authRoutes");

app.use(express.json());
app.use(express.static(path.join(__dirname, frontendPath)));
app.use(express.static(path.join(__dirname, frontendPath, "Frontend")));

app.use("/", pageRoutes);
app.use("/auth", authRoutes);

module.exports = app;