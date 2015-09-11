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
  this.size = 10;
  this.snake = new Snake({board: this});
  this.apples = [];
  this.placeApple();
  this.timeChunk = this.difficulty();
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

Board.prototype.difficulty = function(){
  // returns a number, miliseconds between time steps
  // asymptote to 10?, start at, say 100
  // sigmoid 1/(1+e^x) asymptotes and is easily tuned
  var snakeLength = this.snake.body.length
  var number = (195-185/(1+Math.exp(-snakeLength/4)))
  console.log(number)
  return number
};

Board.prototype.timeStep = function(){
  this.snake.timeStep()
  this.render()
  console.log(this.timeChunk)
  if(!this.snake.collision()){
    setTimeout(function(){
      this.timeStep()
    }.bind(this),this.timeChunk)    
  } else{console.log("you are scrub")}
};

Board.prototype.render = function(){
  var $head = $("<div class='sprite head'>")
  var $body = $("<div class='sprite body'>")
  var $apple = $("<div class='sprite apple'>")
  var $sprites = [$head]
  _.each(this.apples, function(ele, ind, list){$sprites.push(_.clone($apple))})
  _.each(this.snake.body, function(ele, ind, list){
    $sprites.push($("<div class='sprite body'>"))
  })

  $("body").empty()
  $("body").append($sprites)
  var board = this
  var size = board.size
  $(".apple").each(function(index){
    var x = board.apples[index][0]
    var y = board.height - board.apples[index][1]
    $(this).css({"left": x*size, "top": y*size,"background-color":"#ff0000"})
  })
  $(".body").each(function(index){
    var x = board.snake.body[index][0]
    var y = board.height - board.snake.body[index][1]
    $(this).css({"left": x*size, "top": y*size,"background-color":"#00ff00"})    
  })
  $(".head").css({
    "left":this.snake.position[0]*size, 
    "top":(this.height -this.snake.position[1])*size,
    "background-color":"#00aa00"
  })
  $(".sprite").css({
    "height": this.size, 
    "width":this.size,
    "position":"absolute"
  })

};