var React = require("react");

var PostForm = function(){
  return(
    <div className="half-width left">
      <h1>Create Post</h1>
      <form id="post-form" name="">
        Title<span className="subject-warning"></span><br />
        <input className="form-field subject-box" type="text" /><br />
        Body<br />
        <textarea className="form-field body-box"></textarea><br />
        Image<br />
        <input className="form-field img-box" /><br />
        <input type="submit" className="btn submit-btn" />
        <button className="btn clear-btn">Clear</button>
      </form> 
    </div>
  );
}

module.exports = PostForm;