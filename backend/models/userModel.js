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
module.exports = {
  createUser,
  checkUser,
};