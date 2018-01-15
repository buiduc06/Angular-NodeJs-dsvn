var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var OjectID = require('mongodb').OjectID;

const connection = (closure) => {
    return MongoClient.connect('mongodb://127.0.0.1:27017/mean', (err, db) => {
        if (err) {
            return console.log(err);
        }
        closure(db);

    });
}
let response = {
    status: 200,
    message: null,
    data: []
}
var sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == "object" ? err.message : err;
    res.status(501).json(response);

}

router.get('/students', (req, res) => {
    connection((db) => {
        db.connection('students').find().toArray().then((students) => {
            response.data = students;
            res.json(response);
        })
    })
})

module.exports = router;