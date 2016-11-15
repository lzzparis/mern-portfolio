var fetch = require("isomorphic-fetch");

var CLEAR_FORM = "CLEAR_FORM";
var clearForm = function(){
  return {
    type: CLEAR_FORM
  }
};

exports.CLEAR_FORM = CLEAR_FORM;
exports.clearForm = clearForm; 
