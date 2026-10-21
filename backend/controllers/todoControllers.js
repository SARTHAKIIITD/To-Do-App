const userModel = require('../models/userModel');

const todoList = (req, res) => {
  console.log(`${req.params.id} request for todo list`);
  // res.status(201).json({
  //   todoList: "Your request is processed",
  // });

  userModel.todoList(
    req.params.id,
    (err, result) => {
      if(err){
        console.log(`for ${req.params.id} error while fetching todoList\nerr`);
        return res.status(400).json({
          message: 'Something went wrong',
        });
      }
      
      const todos =  result.map(item => item.todo_item);
      res.json({
        todoList: todos,
      });
    }
  );
};

const deleteTodos = (req, res) => {
  console.log(`${req.params.id} requests to delete all items`);
  userModel.removeTodos(
    req.params.id,
    (err, result) => {
      if(err){
        console.log(`Error while deleting all todos of ${req.params.id}`);
        return res.status(400).json({
          message : 'Something went wrong',
        });
      }
      console.log(`${req.params.id} todos are deleted successfully`);
    }
  );
};

module.exports = {
  todoList,
  deleteTodos,
};