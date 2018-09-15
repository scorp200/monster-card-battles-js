function extend(f1, f2) {
	return function() {
		f1();
		f2();
	}
}

// Rename "getDistanceSquared"
function getDistanceRaw(o1, o2) {
	var x = o1.x - o2.x;
	var y = o1.y - o2.y;
	return x * x + y * y;
}

function getDistance(o1, o2) {
	return Math.sqrt(getDistanceRaw(o1, o2));
}

function getAngle(p1, p2) {
	return Math.atan2(p1.y - p2.y, p1.x - p2.x);
}

function getAngleDifference(a1, a2) {
	return mod((a1 - a2) + PI, TAU) - PI;
}

function mod(a, n) {
	return a - Math.floor(a / n) * n;
}

function getHSL(h, s, l) {
	return 'hsl(' +
		(h < 0 ? Math.random() * 360 : h) + ',' +
		(s < 0 ? Math.random() * 100 : s) + '%,' +
		(l < 0 ? Math.random() * 100 : l) + '%)';
}

function ease(value, target, ease, precision) {
	if (Math.abs(value - target) < precision)
		return 0;
	return (target - value) / ease;
}

function clamp(value, min, max) {
	return value > max ? max : value < min ? min : value;
}

/**
 *
 */
function wrapText(context, text, x, y, maxWidth, lineHeight) {
	var words = text.split(' ');
	var line = '';

	for (var n = 0; n < words.length; n++) {
		var testLine = line + words[n] + ' ';
		var metrics = ctx.measureText(testLine);
		var testWidth = metrics.width;
		if (testWidth > maxWidth && n > 0) {
			ctx.fillText(line, x, y);
			line = words[n] + ' ';
			y += lineHeight;
		} else {
			line = testLine;
		}
	}
	context.fillText(line, x, y);
}

/**
 * @param {number} x
 * @param {number} y
 * @return {Object} Vector2D
 */
function Vector2D(x, y) {
	return {
		x: x,
		y: y
	}
}
