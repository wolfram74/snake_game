describe("Meta", function() {

  beforeEach(function() {
  });

  it("should be able to run tests", function() {
    expect(true).toEqual(true);
  });
});

describe("Snake", function(){
  it("should have state variables", function(){
    var snake = new Snake()
    expect(snake.hasOwnProperty("position")).toBe(true)
    expect(snake.hasOwnProperty("velocity")).toBe(true)
    expect(snake.hasOwnProperty("body")).toBe(true)
  })

  it("should be able to move through space", function(){
    var snake = new Snake()
    var oldPosition = snake.position
    snake.timeStep()
    expect(oldPosition).not.toEqual(snake.position)
  })

  it("should respond to key input", function(){
    var snake = new Snake()
    expect(snake.velocity).toEqual([1,0])
    snake.course("W")
    expect(snake.velocity).toEqual([0,1])
    snake.course("A")
    expect(snake.velocity).toEqual([-1,0])
    snake.course("S")
    expect(snake.velocity).toEqual([0,-1])
    snake.course("D")
    expect(snake.velocity).toEqual([1,0])
  })
})

describe("Board", function(){
  it("knows it's dimensions", function(){
    var board = new Board({})
    expect(board.hasOwnProperty("width")).toEqual(true)
    expect(board.hasOwnProperty("height")).toEqual(true)
    expect(board.width).toEqual(30)
    expect(board.height).toEqual(20)
  });
  it("keeps track of apple locations", function(){
    var board = new Board()
    expect(board.apples.length).toEqual(1)
    board.placeApple()
    expect(board.apples.length).toEqual(2)
    board.placeApple([1,0])
    expect(board.apples.length).toEqual(3)
    expect(board.apples[2]).toEqual([1,0])
  });
  it("a snake can eat apples", function(){
    var board = new Board()
    board.placeApple([1,0])
    var applesCount = board.apples.length
    board.snake.timeStep()
    expect(board.apples.length).not.toEqual(applesCount)
    expect(board.snake.body.length).toEqual(1)
  })
  it("a snake can run into itself", function(){
    var board = new Board()
    board.placeApple([1,0])
    board.placeApple([2,0])
    board.placeApple([3,0])
    board.placeApple([4,0])
    board.snake.timeStep()
    board.snake.timeStep()
    board.snake.timeStep()
    board.snake.timeStep()
    expect(board.snake.body.length).toEqual(4)
    expect(board.snake.collision()).toEqual(false)
    board.snake.course("S")
    board.snake.timeStep()
    expect(board.snake.collision()).toEqual(false)
    board.snake.course("A")
    board.snake.timeStep()
    expect(board.snake.collision()).toEqual(false)
    board.snake.course("W")
    board.snake.timeStep()
    expect(board.snake.collision()).toEqual(true)
  })

})