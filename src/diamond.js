/**
 * 1. Diamond

Generate a diamond of size N and the specified character. N specifies the widest part of the diamond(the middle line). N needs to be odd. If an even number is supplied, round it up to the nearest odd.

// 3,+
 +
+++
 +

// 5,*
  *
 ***
*****
 ***
  *

// 4,* (round up to 5)
  *
 ***
*****
 ***
  *

------------------------------------------------------------------------------------------

2. Hollow Diamond

Generate a hollow diamond of size N and the specified character. N specifies the widest part of the diamond(the middle line). N needs to be odd. If an even number is supplied, round it up to the nearest odd.

// 3,+
 +
+ +
 +

// 5,*
  *
 * *
*   *
 * *
  *

// 4,* (round up to 5)
  *
 * *
*   *
 * *
  *

 */

const  Diamond= function(size,symbol){
  this.size = size;
  this.symbol = symbol;
  if(this.size%2==0) this.size++;
};

Diamond.prototype = {
  fillDiamond: function(){
    let diamond=[];
    let space=Math.floor(this.size/2);
    for(i=1;i<=this.size-2;i+=2){
      diamond.push(" ".repeat(space--)+this.symbol.repeat(i));
    };
    space=0;
    for(i=this.size;i>0;i-=2){
      diamond.push(" ".repeat(space++)+this.symbol.repeat(i));
    };
    return diamond;
  },
  hollowDiamond: function(){
    let diamond=[];
    let outerSpace=Math.floor(this.size/2);
    let innerSpace=1;
    diamond.push(" ".repeat(outerSpace)+this.symbol);
    for(i=3;i<=this.size-2;i=i+2){
      diamond.push(" ".repeat(--outerSpace)+this.symbol+" ".repeat(innerSpace)+this.symbol);
      innerSpace+=2;
    };
    outerSpace=0;
    for(i=this.size;i>1;i=i-2){
      diamond.push(" ".repeat(outerSpace++)+this.symbol+" ".repeat(innerSpace)+this.symbol);
      innerSpace-=2;
    };
    diamond.push(" ".repeat(outerSpace)+this.symbol);
    return diamond;
  }
};
module.exports= Diamond;
