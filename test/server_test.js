/*node/no-unpublished-require*/

var expect = require('expect');
var server = require('../lib/server.js');

var http = require('http');
var assert =  require('assert');

describe('Server',function(){

  it('should run properly run test',function(done){
    expect(server).toExist();
    done();
  });

  describe('Example Node Server', function(){
    it('should return 200', function(done){
      http.get('http://127.0.0.1:'+(process.env.PORT || 3000), res => {
        assert.equal(200, res.statusCode);
        done();
      });
    });
  });

});
