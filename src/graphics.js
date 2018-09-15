// Disables right click context menu.
window.addEventListener("contextmenu", function(e) {
	e.preventDefault();
}, false);

resize();
window.addEventListener("resize", resize, false);

function resize() {
	Canvas.width = window.innerWidth;
	Canvas.height = window.innerHeight;
	ctx.clearRect(0, 0, Canvas.width, Canvas.height);
	if (typeof Orbital !== "undefined") {
		Gui.setup();
	}
};
