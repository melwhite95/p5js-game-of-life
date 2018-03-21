var grid;

function setup () {
  createCanvas(400, 400);
   grid = new Grid(20);
}

function draw () {
  background(250);
  
   grid.draw();
}

class Grid {
  constructor (20,20) {
  
  }

  draw () {
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        fill(240); 
        noStroke();
        rect(column * this.cellSize + 1, row * this.cellSize + 1, this.cellSize - 1, this.cellSize - 1);
      }
    }
  }
