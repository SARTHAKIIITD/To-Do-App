const express = require('express');
const router = express.Router();
const userController = require('../controllers/todoControllers');

router.get('/get/:id', userController.todoList);
router.delete('/delete/all/:id', userController.deleteTodos);
router.post('/post/:id', userController.addTodo);
router.delete('/delete/:id/:remvitem', userController.remvItem);

module.exports = router;