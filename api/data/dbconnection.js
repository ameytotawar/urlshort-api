var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://ameytotawar:amey1234@ds141401.mlab.com:41401/meanamey';

var _connection = null;

var open = function() {
  MongoClient.connect(dburl, function(err, db) {
    if (err) {
      console.log("DB connection failed" + err);
      return;
    }
    _connection = db;
    console.log("DB connection open");
  });
};

var get = function() {
  return _connection;
};

module.exports = {
  open : open,
  get : get
};