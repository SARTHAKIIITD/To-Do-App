
const express = require('express');

const app = require("./app");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Sever is alive on port ${port}`);
});