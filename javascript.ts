const myObject = {
  property: 'Value',
  otherProperty: 77,
  "obnoxious property": function() {

    //do stuff!
  }
}

//dot notat
myObject.property //'value'!

//bracket notation
myObject["obnoxious property"] // [Function]

//example one
const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = "X"
const playerTwoMarker = "O"

//example two
const playerOne = {
  name: "tim",
  marker: "X"
}

const playerTwo = {
  name: "jenn",
  marker: "O"
}

function gameOver(winningPlayer){
  console.log("Congrats!")
  console.log(winningPlayer.name + " is the winner.")
}

function player(name, marker){
  this.name = name
  this.marker = marker;
}

const player = new Player('steve', "X")
console.log(player.name)
 
