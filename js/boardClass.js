function Board (args){
  // this.height = typeof args.height !== "undefined" ? args.height : 20;
/*  if(!!args.height){
    console.log("special value given");
    this.height = args.height;
  } else { 
    this.height = 20;
  }
  if(!!args.width){
    console.log("special value given");
    this.width = args.width;
  } else { 
    this.width = 30;
  }
*/  // debugger
  this.height =  20;
  this.width =  30;
  this.snake = new Snake({board: this});
  this.apples = [];
  this.placeApple() ;
}

Board.prototype.placeApple = function(location){
  if(!!location){
    this.apples.push(location)
  } else {
    var x = Math.floor(Math.random()*this.width)
    var y = Math.floor(Math.random()*this.height)
    this.apples.push([x,y])
  };
}