const Diamond= require("../src/diamond.js");
const assert= require("assert");

let test={};
exports.test=test;

test["filled diamond with odd size"]= function(){
  diamond = new Diamond(9,'*');
  let output = [ '    *',
  '   ***',
  '  *****',
  ' *******',
  '*********',
  ' *******',
  '  *****',
  '   ***',
  '    *' ];
  assert.deepEqual(output,diamond.fillDiamond());
};

test["filled diamond with even size"]= function(){
  diamond = new Diamond(6,'*');
  let output = [
  '   *',
  '  ***',
  ' *****',
  '*******',
  ' *****',
  '  ***',
  '   *' ];
  assert.deepEqual(output,diamond.fillDiamond());
};

test["hollow diamond with odd size"]= function(){
  diamond = new Diamond(9,'*');
  let output = [
  '    *',
  '   * *',
  '  *   *',
  ' *     *',
  '*       *',
  ' *     *',
  '  *   *',
  '   * *',
  '    *' ];
  assert.deepEqual(output,diamond.hollowDiamond());
};

test["hollow diamond with even size"]= function(){
  diamond = new Diamond(6,'*');
  let output = [
  '   *',
  '  * *',
  ' *   *',
  '*     *',
  ' *   *',
  '  * *',
  '   *' ];
  assert.deepEqual(output,diamond.hollowDiamond());
};
