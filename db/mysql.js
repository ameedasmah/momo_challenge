const mysql = require('mysql');
var con = mysql.createConnection({
    user: "root",
    password: "123456"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });