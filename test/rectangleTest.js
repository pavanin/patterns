const assert = require("assert");
const Rectangle = require("../src/rectangle.js");

let test={};
exports.test=test;

test["filled rectangle"]= function(){
  let rectangle = new Rectangle(3,4,"#");
  let output=['###', '###', '###', '###'];
  assert.deepEqual(output,rectangle.fillRectangle());
};

test["hollow rectangle"]= function(){
  let rectangle = new Rectangle(3,4,"#");
  let output=['###', '# #', '# #', '###'];
  assert.deepEqual(output,rectangle.hollowRectangle());
};

test["hollow rectangle without space"]= function(){
  let rectangle = new Rectangle(3,2,"#");
  let output=['###','###'];
  assert.deepEqual(output,rectangle.hollowRectangle());
};

test["hollow rectangle without space"]= function(){
  let rectangle = new Rectangle(2,5,"#");
  let output=['##','##','##','##','##'];
  assert.deepEqual(output,rectangle.hollowRectangle());
};
