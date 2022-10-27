let whiteBeam;

let line = {
	start : { x : 0, y : 0 },
	end : { x : 100, y : 100 }
	color : { r : 200, g : 50, b : 50 },
	intensity : 1
};

function setup() {
  	createCanvas(400, 400);
  	console.log("Setup complete")

  	whiteBeam = Line( createVector(mouseX, mouseY), createVector(0, -1) );
}

function draw() {
 	background(220, 100, 100);
  	ellipse(50,50,80,80);
}

function 