var express = require("express");
var router = express.Router();

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "blogDBName";

// Use connect method to connect to the server
MongoClient.connect(
  url,
  function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    // insertDocuments(db, function() {
    findDocuments(db, function() {
      client.close();
    });
  }
);
//});

// //Insert Document
// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection("blogDB");
//   // Insert some documents
//   collection.insertOne({ a: 2 }, function(err, result) {
//     assert.equal(err, null);
//     assert.equal(1, result.result.n);
//     assert.equal(1, result.ops.length);
//     console.log("Inserted 1 document into the collection");
//     callback(result);
//   });
// };

//Find All Documents

// const findDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection("blogDB");
//   // Find some documents
//   collection.find({}).toArray(function(err, docs) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(docs);
//     callback(docs);
//   });
// };

//Find Documents with a Query Filter
const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection("blogDB");
  // Find some documents
  collection.find({ a: 1 }).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
};
/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", function(req, res, next) {
  res.send("Post created");
});
router.get("/read", function(req, res, next) {
  res.send("Get post");
});
router.put("/update", function(req, res, next) {
  res.send("Update post");
});
router.delete("/delete", function(req, res, next) {
  res.send("Post deleted");
});
module.exports = router;
