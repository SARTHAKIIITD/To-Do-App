const userModel = require("../Models/userModel");

const getTodo = (req, res) =>{
  const id = req.params.id;
  console.log(`id ${id} request for todos`);
  userModel.todoList(
    id,
    (err, result) => {
      if(err){
        console.error("Database error: ", err);
        return res.status(500).json({
          message:"Failed to access data"
        });
      }

      const userData = result.map(item => item.todo_item);
      return res.json({
        message : userData
      });
    }
  );
};

module.exports = {
  getTodo,
};
