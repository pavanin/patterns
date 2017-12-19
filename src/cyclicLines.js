/**
 *  Cyclical Lines

Generate N lines of length M. The text used to generate the line should be cycled through a list of characters

// 3 x 1,+,-
+
-
+

// 2 x 4,+,-
++++
----

// 3 x 3, +,-,*
+++
---
***

// 5 x 3, +,-,*
+++
---
***
+++
---

// 4 x 1, +
+
+
+
+
 */



const CyclicLines= function(rows,columns,string){
  this.rows=rows;
  this.columns=columns;
  this.string=string;
}

CyclicLines.prototype={
  cycleLines:function(){
    let lines=[];
    let length=0;
    for(i=0;i<this.rows;i++){
      lines.push(this.string[length].repeat(this.columns));
      length++;
      if(length==this.string.length) length=0;
    };
    return lines;
  }
};
module.exports=CyclicLines;
