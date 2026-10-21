const express = require('express');
const router = express.Router();
const userController = require('../controllers/todoControllers');
router.get('/:id', userController.todoList);

module.exports = router;