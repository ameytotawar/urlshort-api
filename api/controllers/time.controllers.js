var dbconn = require('../data/dbconnection.js');
//var ObjectId = require('mongodb').ObjectID;

// Lookup a shortened URL
module.exports.getID = function(req, res) {
  var db = dbconn.get();
  var id = parseInt(req.params.id,10);
  var collection = db.collection('urlshort');
  if(Number.isNaN(id)) {
    res.status(404).send("Invalid Short URL");
  } else {
    collection.findOne({id: id}, function (err, docs) {
      if (err) return res.status(404).send(err);
      //console.log(docs.length);
      console.log(docs);
      if (docs) {
        res.redirect(docs.url);
      } else {
        res.status(404).send("Invalid Short URL");
      }
    });
  }

};

module.exports.getSUrl = function(req, res) {
  var db = dbconn.get();
  var validUrl = require('valid-url');
  
  var theUrl = req.params[0];
  var collection = db.collection('urlshort');
  console.log('GET theUrl', theUrl);
  var value = 1;
  
  // Validate the URL
  if(theUrl && validUrl.isUri(theUrl)) {
    // Search for URL first
    collection.findOne({url: theUrl}, function (err, docs) {
      if (err) {
        return handleError(res, err);
      }
      console.log("findOne",docs);
      
      if(docs) {
        return res.status(201).json({
          "original_url": theUrl,
          "short_url": "https://url-shortner-ameyt.c9users.io/" + docs.id
        }); 
      }
      else {
        collection.count({}, function (err, count) {
          if (err) {
          return handleError(res, err);
          }
          // console.log(count);
          // console.log(value);
          value = count + 1;
          // console.log(value);
          // If it's not found, create a new one
            collection.insertOne({url: theUrl, id: value}, function (err, myurl) {
              if (err) {
                return handleError(res, err);
              }
              console.log(myurl.ops);
              return res.status(201).json({
                "original_url": theUrl,
                "short_url": "https://url-shortner-ameyt.c9users.io/" + myurl.ops[0].id
              });
            });
        });
      }
    });
    
    

  } else {
    res.status(400).json({
      error: "URL Invalid"
    });
  }

};

// Error Handler
function handleError(res, err) {
  return res.status(500).send(err);
}