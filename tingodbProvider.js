/**
 * Created by ori22_000 on 7/18/2015.
 */

var logger = require('tracer').console();

var Engine = require('tingodb')();

var db = new Engine.Db('c:\\temp\\tingodb', {});

var collection = db.collection("leaders_collection");

module.exports ={
    sayHi : function ()
    {
        return "HI!!!!"
    },
    sayBi: function()
    {
        return "BI!!!!"
    },
    updateLeaderState: function(user_id, state, cb)
    {
        logger.log("save");
        logger.log(state);
        //console.log(state)
        state.user_id = user_id;
        logger.log("after");
        logger.log(state);
        logger.log("after---");

        collection.update({ "user_id" : user_id}, {$set: state} ,{"upsert": true},
            function(err, result)
            {
                logger.log(state);
                console.log("error "+err);
                console.log('ok');
                res = collection.findOne({ "user_id" : user_id},function(err, result)
                {
                 logger.log(result.url);
                });
                //logger.log('res:' +res.url);
                cb();
            });
        console.log("updating " + user_id+":"+state);
    },
    getUserState: function(user_id, cb)
    {
        //res = collection.findOne({ "user_id" : user_id},function(err, result)
        //{
        //    logger.log(result.url);
        //});


        logger.log(user_id);
        collection.findOne({ "user_id" : user_id},
            function(err, result)
            {
                logger.log(result);
                cb(result);
            });
        //var random_index = Math.floor((Math.random() * rand_youtube_url_for_tests.length));

        //console.log("request state for " + random_index);
        //return "user state"+ rand_youtube_url_for_tests[random_index];
    },
    updateLeaderPlaylist: function(user_id, playlist, cb)
    {

        collection.update({ "user_id" : user_id}, {$set: { "user_id" : user_id, "playlist": playlist}} ,
            {"upsert": true},
            function(err, result)
            {
                console.log('insert ' + user_id+ " " + playlist);
                console.log(err);
                console.log('ok');
                cb();
            });
    },
    getLeaderPlaylist: function(user_id,  cb)
    {




        console.log("arg " + user_id)
        collection.findOne({ "user_id" : user_id},
            function(err, result)
            {
                console.log(err);
                console.log(result);
                console.log('ok');
                cb(result.playlist);
            });
    }

};
