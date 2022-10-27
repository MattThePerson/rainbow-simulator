// Dependencies: p5.Vector

class Line {

	constructor(start, direction){
		this.start = start;
		this.end = null;
		this.direction = { x : dirX, y : dirY };

		this.startBounded = true; // start bounded by default
		this.endBounded = false;
	}

	setEnd(end){
		this.endBounded = true;
		this.end 
	}

	removeEnd(){
		this.end = null;
		this.endBounded = false;
	}
}