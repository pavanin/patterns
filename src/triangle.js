/**
 * 1. Left Aligned Triangle

Generate a left-aligned right angled triangle of size N as follows:

// 2,-
-
--

// 3,+
+
++
+++

// 6, *
*
**
***
****
*****
******
---------------------------------------------------------------------------
2. Right Aligned Triangle

Generate a right-aligned right angled triangle of size N as follows:

// 2,-(the empty line below is simply to differentiate. Your output should not contain it)

 -
--

// 3,+(the empty line below is simply to differentiate. Your output should not contain it)

  +
 ++
+++

// 6, * (the empty line below is simply to differentiate. Your output should not contain it)

     *
    **
   ***
  ****
 *****
******
---------------------------------------------------------------------------
3. Left Aligned Hollow Triangle

Generate a left-aligned right angled hollow triangle of size N as follows:

// 2,-
-
--

// 3,+
+
++
+++

// 4,+
+
++
+ +
++++

// 6, *
*
**
* *
*  *
*   *
******
--------------------------------------------------------------

4. Right Aligned Hollow Triangle

Generate a right-aligned right angled hollow triangle of size N as follows:

// 2,-(the empty line below is simply to differentiate. Your output should not contain it)

 -
--

// 3,+(the empty line below is simply to differentiate. Your output should not contain it)

  +
 ++
+++

// 4,+(the empty line below is simply to differentiate. Your output should not contain it)

   +
  ++
 + +
++++

// 6, * (the empty line below is simply to differentiate. Your output should not contain it)

     *
    **
   * *
  *  *
 *   *
******

 */


const Triangle= function(height,symbol){
  this.height=height;
  this.symbol=symbol;
};

Triangle.prototype={
  leftTriangle: function(){
    let lTriangle=[];
    for(length=1;length<=this.height;length++){
      lTriangle.push(this.symbol.repeat(length));
    };
    return lTriangle;
  },
  rightTriangle: function(){
    let rTriangle=[];
    let space = this.height;
    for(length=1;length<=this.height;length++){
      rTriangle.push(" ".repeat(space-1)+this.symbol.repeat(length));
      space--;
    };
    return rTriangle;
  },
  hollowLeftTriangle: function(){
    let hLTriangle=[];
    hLTriangle.push(this.symbol);
    let space=0;
    for(length=2;length<this.height;length++){
      hLTriangle.push(this.symbol+ " ".repeat(space++)+this.symbol);
    };
    hLTriangle.push(this.symbol.repeat(this.height));
    return hLTriangle;
  },
  hollowRightTriangle: function(){
    let hRTriangle=[];
    let space=this.height;
    let innerSpace=0;
    hRTriangle.push(" ".repeat(space-1)+this.symbol);
    for(length=2;length<this.height;length++){
      space--;
      hRTriangle.push(" ".repeat(space-1)+this.symbol+ " ".repeat(innerSpace++)+this.symbol);
    };
    hRTriangle.push(this.symbol.repeat(this.height));
    return hRTriangle;
  }
};
module.exports= Triangle;
