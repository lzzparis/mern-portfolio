global.DATABASE_URL = 'mongodb://localhost/blog-tool-test';

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../../server/index');
var Post = require('../../server/models/post');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('App name', function(){
  before(function(done){
    server.runServer(function(){
      chai.request(app)
      .post("/post/all")
      .end(function(err,res){
        done();
      });
    });
  });
  it('should respond with status 200', function(done){
    chai.request(app)
    .get('/')
    .end( function(err, res){
      res.should.have.status(200);
      done();
    });
  });
  it('should return a post on GET with id', function(done){
    Post.findOne({subject:"Trapped"},function(err,post){
      var testId = post._id;
      chai.request(app)
      .get("/post/"+testId)
      .end(function(err,res){
        res.should.have.status(200);
        res.body.subject.should.equal("Trapped");
        res.body._id.should.equal(""+testId);
        done();
      });
    });
  });
  it('should create a post on POST', function(done){
    chai.request(app)
    .post("/post")
    .send({subject:"Mocha post", body:"Holy cow, how delicious is this coffee!!!"})
    .end(function(err,res){
      res.should.have.status(201);
      res.body.subject.should.equal("Mocha post");
      res.body._id.should.be.a("string");
      done();
    });
  });
  it('should update a post on PUT with id', function(done){
    Post.findOne({subject:"Alderaan"},function(err,post){
      var testId = post._id;
      chai.request(app)
      .put("/post/"+testId)
      .send({subject:"Biscuit recipe", body:"In a large bowl combine flour, sugar, baking powder and salt together. Cut butter into mixture until it begins to look like cornmeal. Make a well with flour mixture and slowly add milk into the middle. Knead dough with your fingers and add milk when necessary. Roll out dough onto a lightly floured surface and roll out to desired thickness. Cut with small biscuit cutter. Butter bottom of skillet and place biscuits in pan. Cover and place on top of hot coals in the fireplace. Carefully place some hot coals on top of the skillet cover. Bake for 12 minutes or until golden brown. Recipe courtesy of Paula Deen, 2008"})
      .end(function(err,res){
        res.should.have.status(200);
        res.body._id.should.equal(""+testId);
        chai.request(app)
        .get("/post/"+testId)
        .end(function(err,res){
          res.body.subject.should.equal("Biscuit recipe");
// TODO - markdown          res.body.body.should.equal("<p>In a large bowl combine flour, sugar, baking powder and salt together. Cut butter into mixture until it begins to look like cornmeal. Make a well with flour mixture and slowly add milk into the middle. Knead dough with your fingers and add milk when necessary. Roll out dough onto a lightly floured surface and roll out to desired thickness. Cut with small biscuit cutter. Butter bottom of skillet and place biscuits in pan. Cover and place on top of hot coals in the fireplace. Carefully place some hot coals on top of the skillet cover. Bake for 12 minutes or until golden brown. Recipe courtesy of Paula Deen, 2008</p>");
          res.body.body.should.equal("In a large bowl combine flour, sugar, baking powder and salt together. Cut butter into mixture until it begins to look like cornmeal. Make a well with flour mixture and slowly add milk into the middle. Knead dough with your fingers and add milk when necessary. Roll out dough onto a lightly floured surface and roll out to desired thickness. Cut with small biscuit cutter. Butter bottom of skillet and place biscuits in pan. Cover and place on top of hot coals in the fireplace. Carefully place some hot coals on top of the skillet cover. Bake for 12 minutes or until golden brown. Recipe courtesy of Paula Deen, 2008");
          res.body.timestamp.should.not.equal("Thu Oct 06 2016 17:18:20 GMT-0700 (MST)");
          done();
        });
      });
    });
  });
  it('should add image to existing post that didn\'t already have one', function(done){
    Post.findOne({subject:"Biscuit recipe"},function(err,post){
      var testId = post._id;
      chai.request(app)
      .put("/post/"+testId)
      .send({subject:"Biscuit recipe", body:"In a large bowl combine flour, sugar, baking powder and salt together. Cut butter into mixture until it begins to look like cornmeal. Make a well with flour mixture and slowly add milk into the middle. Knead dough with your fingers and add milk when necessary. Roll out dough onto a lightly floured surface and roll out to desired thickness. Cut with small biscuit cutter. Butter bottom of skillet and place biscuits in pan. Cover and place on top of hot coals in the fireplace. Carefully place some hot coals on top of the skillet cover. Bake for 12 minutes or until golden brown. Recipe courtesy of Paula Deen, 2008", img:"http://thebarking.com/wp-content/uploads/2012/09/biscuit.jpg",img:"http://thebarking.com/wp-content/uploads/2012/09/biscuit.jpg"})
      .end(function(err,res){
        res.should.have.status(200);
        res.body._id.should.equal(""+testId);
        chai.request(app)
        .get("/post/"+testId)
        .end(function(err,res){
          res.body.subject.should.equal("Biscuit recipe");
// TODO - markdown          res.body.body.should.equal("<p>In a large bowl combine flour, sugar, baking powder and salt together. Cut butter into mixture until it begins to look like cornmeal. Make a well with flour mixture and slowly add milk into the middle. Knead dough with your fingers and add milk when necessary. Roll out dough onto a lightly floured surface and roll out to desired thickness. Cut with small biscuit cutter. Butter bottom of skillet and place biscuits in pan. Cover and place on top of hot coals in the fireplace. Carefully place some hot coals on top of the skillet cover. Bake for 12 minutes or until golden brown. Recipe courtesy of Paula Deen, 2008</p>");
          res.body.body.should.equal("In a large bowl combine flour, sugar, baking powder and salt together. Cut butter into mixture until it begins to look like cornmeal. Make a well with flour mixture and slowly add milk into the middle. Knead dough with your fingers and add milk when necessary. Roll out dough onto a lightly floured surface and roll out to desired thickness. Cut with small biscuit cutter. Butter bottom of skillet and place biscuits in pan. Cover and place on top of hot coals in the fireplace. Carefully place some hot coals on top of the skillet cover. Bake for 12 minutes or until golden brown. Recipe courtesy of Paula Deen, 2008");
          res.body.img.should.equal("http://thebarking.com/wp-content/uploads/2012/09/biscuit.jpg");
          res.body.timestamp.should.not.equal("Thu Oct 06 2016 17:18:20 GMT-0700 (MST)");
          done();
        });
      });
    });
  });
  it('should remove image from existing post when field is empty during edit', function(done){
    Post.findOne({subject:"Cutest kitty"},function(err,post){
      var testId = post._id;
      chai.request(app)
      .put("/post/"+testId)
      .send({subject: "Cutest kitty", body: "Look at this cat isn't it the cutest cat i love cats they are the best animals evar", img:"", timestamp: "Thu Oct 06 2016 17:18:20 GMT-0700 (MST)"})
      .end(function(err,res){
        res.should.have.status(200);
        res.body._id.should.equal(""+testId);
        chai.request(app)
        .get("/post/"+testId)
        .end(function(err,res){
          res.body.subject.should.equal("Cutest kitty");
// TODO - markdown          res.body.body.should.equal("<p>Look at this cat isn&#39;t it the cutest cat i love cats they are the best animals evar</p>");
          res.body.body.should.equal("Look at this cat isn't it the cutest cat i love cats they are the best animals evar");
          res.body.img.should.equal("");
          res.body.timestamp.should.not.equal("Thu Oct 06 2016 17:18:20 GMT-0700 (MST)");
          done();
        });
      });
    });
  });
  it('should delete a post on DELETE with id', function(done){
    Post.findOne({subject:"Trapped"},function(err,post){
      var testId = post._id;
      chai.request(app)
      .delete("/post/"+testId)
      .end(function(err,res){
        res.should.have.status(200);
        chai.request(app)
        .get("/post/"+testId)
        .end(function(err,res){
          res.should.have.status(500);
          done();
        });
      });
    });
  });
  after(function(done) {
    Post.remove(function() {
      done();
    });
  });

});


