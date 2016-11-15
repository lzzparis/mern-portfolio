var React = require("react");

var initialState = {
  formData: {
    subjectBox: "",
    bodyBox: "",
    imgBox: ""
  }
};

var actions = require("../actions/actions");

var reducer = function(state, action){
  state = state || initialState;
  console.log(action);
  switch(action.type){
    case actions.CLEAR_FORM:
      console.log("FORM CLEAR REDUCED!!");
      return Object.assign({}, state, {formData: initialState.formData});
    default: 
      return state;
  }
}

module.exports = reducer;