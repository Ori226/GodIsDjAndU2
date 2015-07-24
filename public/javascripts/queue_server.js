/**
 * Created by ori22_000 on 7/18/2015.
 */
var i = 0;
//var jq = document.createElement('script');
//jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js";
//document.querySelector('head').appendChild(jq);
importScripts("https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js");

function timedCount() {
    i = i + 1;


    $.get( 'http://127.0.0.1:3000/getLeaderStatus/',{ userId: "david" }, function(data) {

        //console.log("ans2 " + data);
        //console.log(youtube_parser(data));

        //res = youtube_parser(data);
        postMessage(data);
        //console.log("----");
        //console.log(data.replace(/\"/g, ""));
        //console.log(data);
        //console.log("--*--");

        //player.loadVideoById(youtube_parser(data)[0],youtube_parser(data)[1]);

        //player.loadVideoById(youtube_parser(data)[0],10);
        //console.log("ans" + data);
    });


    //postMessage(i);
    //setTimeout("timedCount()",500);
}

timedCount();
