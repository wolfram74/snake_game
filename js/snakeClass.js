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
  if(!this.eat){this.body.shift();}
  this.position = this.nextPosition;
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