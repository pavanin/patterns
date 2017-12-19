/**
 * 1. Filled Rectangle

Generate a filled rectangle of MxN dimension. Additionally the user should be able to specify the character used to fill the rectangle.

// 1 x 1, *
*

// 2 x 1, *
**

// 1 x 2, +
+
+

// 2 x 2, -
--
--

// 20 x 7, A
AAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAA

----------------------------------------------------------
2. Hollow Rectangle

Generate a hollow rectangle of MxN dimension. Additionally the user should be able to specify the character that outlines the rectangle.

// 1 x 1, *
*

// 2 x 1, *
**

// 1 x 2, +
+
+

// 2 x 2, -
--
--

// 3 x 3, *
***
* *
***

// 20 x 7, +
++++++++++++++++++++
+                  +
+                  +
+                  +
+                  +
+                  +
++++++++++++++++++++

----------------------------------------------------------
*/


const  Rectangle= function(columns,rows,symbol){
  this.columns = columns;
  this.rows = rows;
  this.symbol = symbol;
}

Rectangle.prototype = {
  fillRectangle: function(){
    let rectangle=[];
    for(let row=0;row<this.rows;row++){
      let length=this.symbol.repeat(this.columns);
      rectangle.push(length);
    }
    return rectangle;
  },
  hollowRectangle: function(){
    let rectangle=[];
    rectangle.push(this.symbol.repeat(this.columns));
    for(length=0;length<this.rows-2;length++){
      let row= this.symbol+" ".repeat(this.columns-2)+this.symbol;
      rectangle.push(row);
    }
    rectangle.push(this.symbol.repeat(this.columns));
    return rectangle;
  }
};
module.exports= Rectangle;
