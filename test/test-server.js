var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../server.js');
var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('App name', function(){
  it('should respond with status 200', function(done){
    chai.request(app)
    .get('/')
    .end( function(err, res){
      res.should.have.status(200);
      done();
    });
  });
  it('should return a post on get with id', function(done){
    chai.request(app)
    .get('/42')
    .end(function(err,res){
      res.should.have.status(200);
      res.body.subject.should.equal("Trapped");
      res.body.id.should.equal(42);
      done();
    });
  });
});


