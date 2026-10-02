const db = require('../Config/db');
const createUser = (name, email, password, callback) => {
  const sql = `
  INSERT INTO users (name, email, password)
  VALUES (?,?,?)
  `;

  db.query(
    sql,
    [name, email, password],
    (err, result) => {
      callback(err, result);
    }
  );
};

const loginUser = (name, callback) => {
  const sql = `
  SELECT id, password
  FROM users 
  WHERE name = ? 
  `;

  db.query(
    sql,
    [name],
    (err, result) => {
      callback(err, result);
    }
  );
};

module.exports = {
  createUser,
  loginUser,
};