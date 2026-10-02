const express = require('express');
const router = express.Router();

const pageController = require("../Controllers/pageController");

router.get("/signup", pageController.signup);

module.exports = router;