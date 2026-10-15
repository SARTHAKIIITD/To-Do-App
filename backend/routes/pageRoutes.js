const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageControllers');

router.get("/signup", pageController.signup);
router.get("/dashboard", pageController.dashboard);

module.exports = router;