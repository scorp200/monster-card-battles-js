var Canvas = document.getElementById("c");
var ctx = Canvas.getContext("2d", { alpha: false });
var PI = Math.PI;
var TAU = PI * 2;

// Update game.
var lastTick = performance.now();
var tickLength = 1000 / 60; // Logic steps per second
var last = 0;
(function frame(timestamp) {

	requestAnimationFrame(frame);
	var nextTick = lastTick + tickLength;
	Fps.update(1 / ((timestamp - last) / 1000));
	last = timestamp;

	if (timestamp > nextTick) {
		var timeSinceTick = timestamp - lastTick;
		var numTicks = Math.floor(timeSinceTick / tickLength);
		update(Math.min(numTicks, 60));
		render();
		lastTick = timestamp;
	}
})(lastTick);

function update(repeat) {

	if (--repeat) {
		update(repeat);
	}

}

function render() {

}
