const db = require("../config/db");

const createUser = (email, username, password, callback) => {
  const sql = `
  INSERT INTO users (name, email, password)
  VALUES (?,?,?)
  `;

  db.query(
    sql,
    [username, email, password],
    (err, result) => {
      callback(err, result);
    }
  );
};

const checkUser = (username, password, callback) => {
  const sql = `
  SELECT id, name, email, password
  FROM users
  WHERE name = ?
  `;

  db.query(
    sql,
    [username],
    (err, result) => {
      callback(err, result);
    }
  );
};

const todoList = (id, callback) => {
  const sql = `
  SELECT todo_item
  FROM todos
  WHERE id = ?`;

  db.query(
    sql,
    [id],
    (err, result) =>{
      callback(err, result);
    }
  );
};

const removeTodos = (id, callback) => {
  const sql = `
  DELETE FROM todos
  WHERE id = ?
  `;

  db.query(
    sql,
    [id],
    (err, result) => {
      callback(err,result);
    }
  );
};

const insertTodo = (id, newItem, callback) => {
  const sql = `
  INSERT INTO todos (id, todo_item)
  VALUES (?,?)
  `;

  db.query(
    sql,
    [id, newItem],
    (err, result) => {
      callback(err, result);
    }
  );
};

module.exports = {
  createUser,
  checkUser,
  todoList,
  removeTodos,
  insertTodo,
};