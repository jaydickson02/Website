//Maze Generation Variables
export default function sketch (p) {
var mazeDimensions = {
    x:50,
    y:25
  };
  
  var cellScale = 15;
  
  //Initialise variables
  var randomCell;
  var mazeNeighbours;
  var frontier = [];
  var filledArray = [];
  var cellsInMaze = [];
  var walls = [];
  var startRandomCell;
  
  
  p.setup = function(){
  //Set framerate
  p.frameRate(1000);
  
  //Create canvas that can fit the maze
  p.createCanvas(mazeDimensions.x * cellScale + 1, mazeDimensions.y * cellScale + 1);
  
  //Generate the maze cells
  filledArray = fillMazeCellArray(mazeDimensions);
  
  //Get a random cell to use as maze start point
  startRandomCell = getRandomCell(filledArray);
  
  cellsInMaze = addToMaze(startRandomCell, cellsInMaze);
  
  //Generate frontier
  frontier = addFrontier(startRandomCell, cellsInMaze, frontier, mazeDimensions);
  
  
  }
  
  
    p.draw = function(){
  
    //Drawing everything
  
    //Draw the maze grid
    for (var i = 0; i < filledArray.length; i++){
      p.fill(255);
      p.rect(filledArray[i].x * cellScale, filledArray[i].y * cellScale, cellScale, cellScale);
    }
  
    //Draw the maze cells
    for (var i = 0; i < cellsInMaze.length; i++){
        p.fill(255);
        p.rect(cellsInMaze[i].x * cellScale, cellsInMaze[i].y * cellScale, cellScale, cellScale);
    }
  
    //Draw the frontier
    for (var i = 0; i < frontier.length; i++){
        p.fill(200, 255, 200);
        p.rect(frontier[i].x * cellScale, frontier[i].y * cellScale, cellScale, cellScale);
    }
  
    //Draw the starter cell
    p.fill(200, 150, 150);
    p.rect(startRandomCell.x * cellScale, startRandomCell.y * cellScale, cellScale, cellScale);
  
    //Check that the wall array is not empty
    if (walls.length > 0){
    for (var i = 0; i < walls.length; i++){
        p.stroke(255);
        p.line(walls[i].x, walls[i].y, walls[i].x2, walls[i].y2);
        p.stroke(0);
    }
    }
  
  
  
    //Logic starts here
  
    //Check frontier is not empty
  
  if (frontier.length > 0){
  
    let frontierRandomCell = getRandomCell(frontier);
  
    cellsInMaze = addToMaze(frontierRandomCell, cellsInMaze);
  
    mazeNeighbours = checkForMazeNeighbours(frontierRandomCell, cellsInMaze);
  
    walls = removeWall(mazeNeighbours, frontierRandomCell, walls, cellScale);
  
    removeFromFrontier(frontierRandomCell, frontier);
  
    frontier = addFrontier(frontierRandomCell, cellsInMaze, frontier, mazeDimensions);
  
  } else {
    console.log('Frontier Empty');
  }
  
  }

  //Prims Algorithm

function fillMazeCellArray(mazeDimensions){

    //Initialise Variables
    var counter = 0;
    var emptyCells = [];
    
    //Generate array of maze cells with coords based on size of maze
    for(var x=0; x< mazeDimensions.x; x++){
      for(var y=0; y< mazeDimensions.y; y++){
        emptyCells[counter] = {x,y};
        counter++
      }
    }
    
    //Return array of maze cells
    return emptyCells;
    }
    
    
    
    function getRandomCell(cellArray){
    
      //Generate a random number
      var result = Math.random() * cellArray.length;
    
      //Make number an int
      result = Math.floor(result);
    
      //select cell from array
      var randomCell = cellArray[result];
    
      //return the cell
      return randomCell;
    }
    
    
    
    function addFrontier(cell, mazeCells, frontier, mazeDimensions){
    
      //Initialise Variables
      var cellsToCheck = [];
      var isNotInFrontier = true;
      var isNotInMaze = true;
      var cellCounter = 0;
    
      //Set x and y
      var x = cell.x;
      var y = cell.y;
    
      //Define coords of frontier cells
      cellsToCheck[0] = {x: x, y: y - 1}; // (x, y - 1)
      cellsToCheck[1] = {x: x, y: y + 1}; // (x, y + 1)
      cellsToCheck[2] = {x: x - 1, y: y}; // (x + 1, y)
      cellsToCheck[3] = {x: x + 1, y: y}; // (x + 1, y)
    
      //Iterate through all the cells that need to be checked
      for(var i = 0; i<cellsToCheck.length; i++){
        //reset flags
        isNotInFrontier = true;
        isNotInMaze = true;
    
        //Assign x and y
        let checkX = cellsToCheck[i].x;
        let checkY = cellsToCheck[i].y;
    
        //Check that the x and y are not out of bounds relative to the maze size
        if(checkX >= 0 && checkY >= 0 && !(checkX >= mazeDimensions.x) && !(checkY >= mazeDimensions.y)){
    
          //Check the cell is not in the frontier array already
          for(var a = 0; a < frontier.length; a++){
            if(frontier[a].x == checkX && frontier[a].y == checkY){
    
              //If the cell is in frontier set flag to False
              isNotInFrontier = false;
    
            }
          }
    
          //Check the cell is not in the maze already
    
          for(var a = 0; a < mazeCells.length; a++){
            if(mazeCells[a].x == checkX && mazeCells[a].y == checkY){
    
              //If the cell is in maze set flag to False
              isNotInMaze = false;
    
            }
    
          }
    
          //Check flag to determine if the cell was found to be in the frontier
          if(isNotInFrontier && isNotInMaze){
    
            //Add cell to array to be added to frontier later
            frontier.push({x: checkX, y: checkY});
    
            //increment counter
            cellCounter++;
    
          }
    
        }
    
    
    
      }
      return frontier;
    
    }
    
    function checkForMazeNeighbours(frontierCell, mazeCells){
      //Initialise Variables
      var cellsToCheck = [];
      var neighbourCells = [];
    
      //Assign x and y
      let x = frontierCell.x;
      let y = frontierCell.y;
    
      //Define coords of the neighbour cells
      cellsToCheck[0] = {x: x, y: y - 1, sde: 'U'}; // (x, y - 1)
      cellsToCheck[1] = {x: x, y: y + 1, sde: 'D'}; // (x, y + 1)
      cellsToCheck[2] = {x: x - 1, y: y, sde: 'L'}; // (x + 1, y)
      cellsToCheck[3] = {x: x + 1, y: y, sde: 'R'}; // (x + 1, y)
    
      //Iterate through the maze cells checking to see if any of the coords match neighbour cells
      for(var i = 0; i<mazeCells.length; i++){
        for(var a = 0; a<cellsToCheck.length; a++){
    
          //If cells match add them to neighbours array
          if(mazeCells[i].x == cellsToCheck[a].x && mazeCells[i].y == cellsToCheck[a].y){
            neighbourCells.push({x: cellsToCheck[a].x, y: cellsToCheck[a].y, sde: cellsToCheck[a].sde});
          }
        }
      }
      //Return complete array
      return neighbourCells;
    }
    
    function removeWall(neighbourCells, cell, walls, cellScale){
    
      //Initialise Variables
      var lineCoords;
    
      //Choose a random neighbour cell
      var randomCell = getRandomCell(neighbourCells)
    
      //Assign x and y;
      var x = cell.x * cellScale;
      var y = cell.y * cellScale;
    
      //Find the side that connects the two cells
      var sde = randomCell.sde;
    
    
      //Check if side is Up
      if(sde == 'U'){
        lineCoords = {x1: x, y1: y, x2: x + cellScale, y2: y}
      };
    
      //Check if side is Down
      if(sde == 'D'){
        lineCoords = {x1: x, y1: y + cellScale, x2: x + cellScale, y2: y + cellScale}
      };
    
      //Check if side is Left
      if(sde == 'L'){
        lineCoords = { x1: x, y1: y, x2: x, y2: y + cellScale}
      };
    
      //Check if side is Right
      if(sde == 'R'){
        lineCoords = { x1: x + cellScale, y1: y, x2: x + cellScale, y2: y + cellScale}
      };
    
      console.log(sde);
      console.log(lineCoords);
    
      walls.push({x: lineCoords.x1 , y: lineCoords.y1, x2: lineCoords.x2, y2: lineCoords.y2});
      return walls;
    
    }
    
    function removeFromFrontier(cell, frontier){
      //Locate the cell in the array
      for(var i = 0; i < frontier.length; i++){
        if(frontier[i].x == cell.x && frontier[i].y == cell.y){
          //Remove cell at the found position
          frontier.splice(i, 1);
        }
      }
    }
    
    function addToMaze(cell, cellsInMaze){
      cellsInMaze.push({x: cell.x, y: cell.y})
      return cellsInMaze;
    }
}