const assert= require('assert');
const Triangle= require('../src/triangle.js');
let test={};
exports.test=test;

test["hollow left triangle"]=function(){
  let triangle= new Triangle(12,"*");
  let output=[ '*',
    '**',
    '* *',
    '*  *',
    '*   *',
    '*    *',
    '*     *',
    '*      *',
    '*       *',
    '*        *',
    '*         *',
    '************' ];
  assert.deepEqual(output,triangle.hollowLeftTriangle());
}

test["hollow right triangle"]=function(){
  let triangle= new Triangle(12,"*");
  let output= [ '           *',
  '          **',
  '         * *',
  '        *  *',
  '       *   *',
  '      *    *',
  '     *     *',
  '    *      *',
  '   *       *',
  '  *        *',
  ' *         *',
  '************' ];
  assert.deepEqual(output,triangle.hollowRightTriangle());
};

test["filled right triangle"]=function(){
  let triangle= new Triangle(12,"*");
  let output=  [ '           *',
    '          **',
    '         ***',
    '        ****',
    '       *****',
    '      ******',
    '     *******',
    '    ********',
    '   *********',
    '  **********',
    ' ***********',
    '************' ];
  assert.deepEqual(output,triangle.rightTriangle());
};

test["filled left triangle"]=function(){
  let triangle= new Triangle(12,"*");
  let output=  [ '*',
    '**',
    '***',
    '****',
    '*****',
    '******',
    '*******',
    '********',
    '*********',
    '**********',
    '***********',
    '************' ];
    assert.deepEqual(output,triangle.leftTriangle());
};
