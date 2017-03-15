var express = require("express");
var app = require('express')();
var http = require('http').Server(app);

function httpListen(port){
  http.listen(port, function(){
    console.log('listening on *:',port);
  });
}
httpListen(process.env.PORT || 3000);
app.use(express.static('public'));
console.log("finished initialising server");
