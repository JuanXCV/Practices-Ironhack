var roverSquare = [
  [" "," "," "," ","O","O","O"," ","O"," "],
  [" "," ","O"," "," "," "," "," "," "," "],
  ["O"," "," ","O"," ","O"," "," "," ","O"],
  [" "," "," "," "," "," "," "," "," "," "],
  [" ","O"," "," ","O"," "," "," ","O"," "],
  [" "," "," "," "," "," ","O"," "," "," "], 
  [" "," "," "," "," ","O"," ","O"," "," "],
  [" "," "," ","O"," "," "," "," "," ","O"],
  [" ","O"," "," "," "," ","O"," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
]

var rover1 = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog:"",
}

var rover2 = {
  direction: "N",
  x: 9,
  y: 9,
  travelLog:"",
}

function turnLeft(rover){
  switch(rover.direction){
    case "N" : rover.direction = "W";
      break;
    case "W" : rover.direction = "S";
      break;
    case "S" : rover.direction = "E";
      break;
    case "E" : rover.direction = "N";
      break;
  }
}

function turnRight(rover){
  switch(rover.direction){
    case "N" : rover.direction = "E";
      break;
    case "E" : rover.direction = "S";
      break;
    case "S" : rover.direction = "W";
      break;
    case "W" : rover.direction = "N";
      break;
  }
}

function moveForward(rover){
  rover.travelLog += "("+rover.x+","+rover.y+") "
  roverSquare[rover.y][rover.x]=" "
  switch(rover.direction){
    case "N": if(rover.y>0){
      switch(roverSquare[rover.y-1][rover.x]){
        case " ": rover.y -= 1;
          break;
        case "O": console.log("Obstacle in: "+rover.x+","+(rover.y-1));
          break;
        case "R": console.log("Rover in: "+rover.x+","+(rover.y-1));
          break;
      }
    };
      break;
    case "E": if(rover.x<9){
      switch(roverSquare[rover.y][rover.x+1]){
        case " ": rover.x += 1;
          break;
        case "O": console.log("Obstacle in: "+(rover.x+1)+","+rover.y);
          break;
        case "R": console.log("Rover in: "+(rover.x+1)+","+rover.y);
          break;
      }
    };
      break;
    case "S": if(rover.y<9){
      switch(roverSquare[rover.y+1][rover.x]){
        case " ": rover.y += 1;
          break;
        case "O": console.log("Obstacle in: "+rover.x+","+(rover.y+1));
          break;
        case "R": console.log("Rover in: "+rover.x+","+(rover.y+1));
          break;
      }
    };
      break;
    case "W": if(rover.x>0){
      switch(roverSquare[rover.y][rover.x-1]){
        case " ": rover.x -= 1;
          break;
        case "O": console.log("Obstacle in: "+(rover.x-1)+","+rover.y);
          break;
        case "R": console.log("Rover in: "+(rover.x-1)+","+rover.y);
          break;
      }
    };
      break;
  }
  roverSquare[rover.y][rover.x]="R"
}

function moveBackward(rover){
  rover.travelLog += "("+rover.x+","+rover.y+") "
  roverSquare[rover.y][rover.x]=" "
  switch(rover.direction){
    case "N": if(rover.y<9){
      switch(roverSquare[rover.y+1][rover.x]){
        case " ": rover.y += 1;
          break;
        case "O": console.log("Obstacle in: "+rover.x+","+(rover.y+1));
          break;
        case "R": console.log("Rover in: "+rover.x+","+(rover.y+1));
          break;
      }
    };
      break;
    case "E": if(rover.x>0){
      switch(roverSquare[rover.y][rover.x-1]){
        case " ": rover.x -= 1;
          break;
        case "O": console.log("Obstacle in: "+(rover.x-1)+","+rover.y);
          break;
        case "R": console.log("Rover in: "+(rover.x-1)+","+rover.y);
          break;
      }
    };
      break;
    case "S": if(rover.y>0){
      switch(roverSquare[rover.y-1][rover.x]){
        case " ": rover.y -= 1;
          break;
        case "O": console.log("Obstacle in: "+rover.x+","+(rover.y-1));
          break;
        case "R": console.log("Rover in: "+rover.x+","+(rover.y-1));
          break;
      }
    };
      break;
    case "W": if(rover.x<9){
      switch(roverSquare[rover.y][rover.x+1]){
        case " ": rover.x += 1;
          break;
        case "O": console.log("Obstacle in: "+(rover.x+1)+","+rover.y);
          break;
        case "R": console.log("Rover in: "+(rover.x+1)+","+rover.y);
          break;
      }
    };
      break;
  }
  roverSquare[rover.y][rover.x]="R"
}

var rover= rover1;

function commands(cmds){
  for(var i=0;i<cmds.length;i++){
    if(i%2===0){rover=rover1}else{rover=rover2}
    switch(cmds[i]){
      case "r": turnRight(rover);
        break;
      case "l": turnLeft(rover);
        break;
      case "f": moveForward(rover);
        break;
      case "b": moveBackward(rover);
        break;
    }
  }
  console.log("Rover1 travelLog: "+rover1.travelLog)
  console.log("Rover2 travelLog: "+rover2.travelLog)
}

var cmdRandom="fffff"
for(var i=0;i<0;i++){
  var numRandom= Math.floor(Math.random()*4)
  switch(numRandom){
    case 0: cmdRandom += "l";
      break;
    case 1: cmdRandom += "r";
      break;
    case 2: cmdRandom += "f";
      break;
    case 3: cmdRandom += "b";
      break;
  }
}
commands(cmdRandom)

roverSquare[rover1.y][rover1.x]="R1"
roverSquare[rover2.y][rover2.x]="R2"

console.log(roverSquare)







