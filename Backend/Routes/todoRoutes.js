const express = require("express");
const router = express.Router();
const todoController = require("../Controllers/todoController");
router.get("/:id", todoController.getTodo);

module.exports = router;