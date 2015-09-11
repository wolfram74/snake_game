function Snake (){
  this.position=[0,0]
  this.velocity = [1,0]
  this.body = []
};

Snake.prototype.timeStep = function(){
  var newPosition = []
  for(var i=0; i < this.position.length; i++){
    newPosition.push(this.position[i]+this.velocity[i])
  };
  this.position = newPosition
};

Snake.prototype.course = function(key){
  this.directions[key].bind(this)()
}

Snake.prototype.directions = {
  W: function(){this.velocity = [0,1]},
  A: function(){this.velocity = [-1,0];console.log(this)},
  S: function(){this.velocity = [0,-1]},
  D: function(){this.velocity = [1,0]}
}