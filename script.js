var svg = document.getElementById("drawArea");
var drawing = false;
var line;
var points = "";

svg.onmousedown = function (event) {
  drawing = true;
  points = "";

  line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
  line.setAttribute("stroke", "black");
  line.setAttribute("stroke-width", "2");
  line.setAttribute("fill", "none");

  svg.appendChild(line);
};

svg.onmousemove = function (event) {
  if (drawing == true) {
    var x = event.offsetX;
    var y = event.offsetY;

    points = points + x + "," + y + " ";
    line.setAttribute("points", points);
  }
};

svg.onmouseup = function () {
  drawing = false;
};

svg.onmouseleave = function () {
  drawing = false;
};

function clearLast() {
  if (svg.lastElementChild != null) {
    svg.removeChild(svg.lastElementChild);
  }
}

