/**
 * Created by ori22_000 on 7/17/2015.
 */
answer = 42; // What is the question?
console.log('sss42');
tingo_provider =  require("./tingodbProvider.js");
var logger = require('tracer').console();

rand_youtube_url_for_tests =
    [
        "https://youtu.be/a01QQZyl-_I?t=15",
        "https://youtu.be/FphKHPraIAg?t=292",
        "https://youtu.be/FphKHPraIAg?t=553",
        "https://youtu.be/FphKHPraIAg?t=588"
    ]


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
        tingo_provider.updateLeaderState(user_id,state,function(){
            console.log("updating " + user_id+":"+state);
        });
    },
    getUserState: function(user_id, cb)
    {
        tingo_provider.getUserState(user_id,function(url)
        {
            logger.log("request state for " + JSON.stringify(url) )
            cb(url);
        });
    },

    updateLeaderPlaylist: function(user_id, playlist, cb)
    {
        tingo_provider.updateLeaderPlaylist(user_id,playlist,function(){
            console.log("updating " + user_id+":"+playlist);
        });
    },
    getLeaderPlaylist: function(user_id, cb)
    {
        tingo_provider.getLeaderPlaylist(user_id,function(playlist)
        {
            console.log("request state for " + playlist);
            cb(playlist);
        });
    }

};

