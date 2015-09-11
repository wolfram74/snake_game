function Snake(args){
  args = args || {};
  _.defaults(args, {"board": null});
  this.board = args.board;
  this.position=[0,0];
  this.nextPosition
  this.velocity = [1,0];
  this.body = [];
  this.eat = false
};

Snake.prototype.timeStep = function(){
  this.nextPosition = [];
  for(var i=0; i < this.position.length; i++){
    this.nextPosition.push(this.position[i]+this.velocity[i]);
  };
  if(!!this.board){this.appleCheck(this.nextPosition);};
  this.body.push(this.position);
  if(!this.eat){
    this.body.shift(); 
  } else{
    this.board.placeApple();
    this.board.timeChunk = this.board.difficulty();
    console.log(this.body.length)
    console.log(this.body)
    // debugger
    this.eat = false;
  }
  this.position = this.nextPosition;
  if(!!this.board){this.boardWrap()}
};

Snake.prototype.appleCheck = function(location){
  var matchIndex = -1;
  for(var i = 0; i < this.board.apples.length; i++){
    if(_.isEqual(location, this.board.apples[i])){
      matchIndex = i;
    };
  };
  if(matchIndex >= 0){
    this.eatApple(matchIndex);
  }
};

Snake.prototype.eatApple = function(appleID){
  this.board.apples.splice(appleID,1);
  this.eat = true
}

Snake.prototype.course = function(key){
  this.directions[key].bind(this)();
}

Snake.prototype.collision = function(){
  var matchIndex = -1;
  for(var i = 0; i < this.body.length; i++){
    if(_.isEqual(this.position, this.body[i])){
      matchIndex = i;
    };
  };
  return matchIndex >= 0
}

Snake.prototype.directions = {
  W: function(){this.velocity = [0,1]},
  A: function(){this.velocity = [-1,0]},
  S: function(){this.velocity = [0,-1]},
  D: function(){this.velocity = [1,0]}
}

Snake.prototype.boardWrap = function(){
  this.position[0] = (this.position[0]+this.board.width)%this.board.width
  this.position[1] = (this.position[1]+this.board.height)%this.board.height
};