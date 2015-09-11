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
})