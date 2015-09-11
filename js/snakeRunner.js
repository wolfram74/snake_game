$(document).ready(function(){
  main();
})

function main(){
  var board = new Board()
  board.timeStep()
  $("body").on("keydown", function(e){
    var command = String.fromCharCode(e.keyCode)
    board.snake.course(command)
  })
  // board.render()
  // board.placeApple([1,0])
  // board.snake.timeStep()
  // board.snake.timeStep()
  // board.render()
  // debugger
};
