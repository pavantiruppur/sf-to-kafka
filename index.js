// subscribe to salesforce platform event 'CreatedContact__e' using jsforce
var jsforce = require("jsforce");
var conn = new jsforce.Connection();
conn.login(
  (user = "pavantiruppur@gmail.com"),
  (password = "P^tiruppur30GNk9bGiNt3clQUC7cVWcLzo0"),
  function (err, userInfo) {
    if (err) {
      return console.error(err);
    }
    conn.streaming.topic("/event/Contact__e").subscribe(function (message) {
      console.dir(message);
    });
  }
);
