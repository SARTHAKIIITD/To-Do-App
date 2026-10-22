const userModel = require('../models/userModel');

const todoList = (req, res) => {
  console.log(`${req.params.id} request for todo list`);
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
      res.status(201).json({
        message : 'every thing is fine',
      });
    }
  );
};

const addTodo = (req, res) => {
  console.log(`${req.params.id} want to add new item`);
  const {itemName} = req.body;
  if(!itemName){
    return res.status(400).json({
      message : "Please enter todo",
    });
  }
  userModel.insertTodo(
    req.params.id,
    itemName,
    (err, result) => {
      if(err){
        console.log(`error occur while inserting new todo\n ${err}`);
        return res.status(400).json({
          message : 'something went wrong',
        });
      }
      res.status(201).json({
        message : 'Insertion was successful',
      });
    }
  );
}

const remvItem = (req, res) => {
  console.log(req.params.remvitem);
  userModel.removeItem(
    req.params.id,
    req.params.remvitem,
    (err, result) => {
      if(err){
        console.log(`Error while removing item for id:${req.params.id}\n${err}`);
        return res.status(400).json({
          message : 'something went wrong'
        });
      }
      console.log(result);
      return res.status(201).json({
        message: `Item was removed`
      });
    }
  );
};

module.exports = {
  todoList,
  deleteTodos,
  addTodo,
  remvItem,
};