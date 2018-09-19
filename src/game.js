var Canvas = document.getElementById("c");
var ctx = Canvas.getContext("2d", { alpha: false });
var redraw = false;
var x, y, vx, vy;

function draw() {
	if (redraw)
		requestAnimationFrame(draw);
	ctx.clearRect(0, 0, Canvas.width, Canvas.height);
	ctx.webkitImageSmoothingEnabled = false;
	ctx.mozImageSmoothingEnabled = false;
	ctx.imageSmoothingEnabled = false; /// future
}
