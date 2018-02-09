var express = require("express");
var app = require('express')();
var http = require('http').Server(app);
var compression = require('compression');

app.use(express.static('public'));
app.use(compression());

function httpListen(port){
  http.listen(port, function(){
    console.log('listening on *:',port);
  });
}

httpListen(process.env.PORT || 3000);

console.log("finished initialising server");
