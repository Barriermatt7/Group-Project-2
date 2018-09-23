var mysql = require("mysql");

var connection = mysql.createConnection({
  socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock',
  port: 3306,
  user: "root",
<<<<<<< HEAD
  password: "rootroot",
  database: "runr_db"
});
=======
  password: "root",
  database: "runr_db"
});

>>>>>>> 7e31dbff0ef77fcfc86243884fd4e1f3fa7b2850

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

function multiSearch() {
  var query = "SELECT total_miles_day FROM runr";
  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].artist);
    }
   });
}
// Export connection for our ORM to use.
module.exports = connection;
