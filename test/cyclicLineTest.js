const CyclicLines= require("../src/cyclicLines.js");
const assert=require("assert");

let test={};
exports.test=test;

test["cyclicLines with number of lines equal to number of characters"]= function(){
  Cyclic = new CyclicLines(3,6,"*$#");
  let output=['******','$$$$$$','######'];
  assert.deepEqual(output,Cyclic.cycleLines());
};

test["cyclicLines with number of lines greater than the number of characters"]= function(){
  Cyclic = new CyclicLines(5,6,"*$#");
  let output = ['******','$$$$$$','######','******','$$$$$$'];
  assert.deepEqual(output,Cyclic.cycleLines());
};

test["cyclicLines with number of lines less than the number of characters"]= function(){
  Cyclic = new CyclicLines(2,6,"*$#");
  let output = ['******','$$$$$$'];
  assert.deepEqual(output,Cyclic.cycleLines());
};
