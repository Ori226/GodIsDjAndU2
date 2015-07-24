/**
 * Created by ori22_000 on 7/17/2015.
 */

assert = require('assert');

var Engine = require('tingodb')();

var db = new Engine.Db('c:\\temp\\tingodb', {});

var collection = db.collection("stam_yalla");

collection.update({ "username" : "testuser1"}, { "username" : "testuser1", "email" : "testuse222r1@testdomain.com" },{"upsert": true},
    function(err, result)
    {
        console.log(err);
        console.log('ok');



        collection.findOne({ "username" : "testuser1"},
            function(err, result)
            {
                console.log(err);
                console.log(result.email);
                console.log('ok');
            });
    });




//
//collection.insert([{ "username" : "testuser1", "email" : "testuser1@testdomain.com" }],
//    function(err, result) {
//
//
//    collection.findOne({username:'testuser1'}, function(err, item) {
//
//        assert.equal(null, err);
//        console.log(item.email);
//        //assert.equal('world_safe2', item.email);
//    })
//});