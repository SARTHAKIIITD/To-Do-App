const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, "../")));
app.use(express.static(path.join(__dirname, "../Frontend")));

const pageRoutes = require('./routes/pageRoutes');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');

app.use('/', pageRoutes);
app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);

module.exports = app;