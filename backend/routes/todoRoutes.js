const express = require('express');
const router = express.Router();
const userController = require('../controllers/todoControllers');

router.get('/get/:id', userController.todoList);
router.delete('/delete/all/:id', userController.deleteTodos);

module.exports = router;