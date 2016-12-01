// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var turn = "player1"
function makeShape() {
  if(turn=="player1") {
      var canvas = document.getElementById("game-board")
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", 40)
      circle.setAttribute("cy", 40)
      circle.setAttribute("r", 30)
      circle.setAttribute("fill", "gold")
      canvas.appendChild(circle)

    turn ="player2"
  } else {
      var canvas = document.getElementById("game-board")
      var rect = document.createElementNS(namespace, "rect")
      rect.setAttribute("x", 40)
      rect.setAttribute("y", 40)
      rect.setAttribute("width", 40)
      rect.setAttribute("height", 40)
      rect.setAttribute("fill", "red")
      canvas.appendChild(rect)

     turn ="player1"
  }
}

function doIt() {
    if(turn=="player1") {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 60)
  circle.setAttribute("cy", 30)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "gold")
  canvas.appendChild(circle)

  turn ="player2"
} else {
    var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 40)
    rect.setAttribute("y", 40)
    rect.setAttribute("rx", 40)
    rect.setAttribute("ry", 40)
    rect.setAttribute("fill", "red")
    canvas.appendChild(rect)
}
}

function Jahstus() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 200)
  circle.setAttribute("cy", 40)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "gold")
  canvas.appendChild(circle)
}
function LouieVuitton() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 40)
  circle.setAttribute("cy", 120)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "green")
  canvas.appendChild(circle)
}
function Yoshi() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 120)
  circle.setAttribute("cy", 120)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "gold")
  canvas.appendChild(circle)
}
function KanyeWest() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 200)
  circle.setAttribute("cy", 120)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "green")
  canvas.appendChild(circle)
}
function Yarles() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 40)
  circle.setAttribute("cy", 200)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "gold")
  canvas.appendChild(circle)
}
function ChocolateMiilk() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 120)
  circle.setAttribute("cy", 200)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "green")
  canvas.appendChild(circle)
}
function LeBronJames23() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 200)
  circle.setAttribute("cy", 200)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "gold")
  canvas.appendChild(circle)


}
