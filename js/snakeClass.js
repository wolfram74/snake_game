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