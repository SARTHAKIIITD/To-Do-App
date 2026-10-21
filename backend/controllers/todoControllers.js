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

module.exports = {
  todoList,
};