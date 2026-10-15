const mysql = require('mysql2');

const con = mysql.createConnection({
  host : "localhost",
  user : "dhruv",
  password : "1234",
  database : "to_do_db"
});

con.connect((err) => {
  if(err){
    console.error(`Unable to connect to the database\n${err}`);
    return;
  }
  console.log(`Connected to databse successfully`);
});
module.exports = con;