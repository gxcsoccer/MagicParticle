(function() {
	var canvas, context, particles = [],
		requestFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback, 1000 / 60);
	};

	window.SandBox = {
		init: function(el) {
			canvas = document.querySelector(el);
			context = canvas.getContext('2d');
			this.adjustCanvas();
			ShapeGenerater.init();
			this.loop();
		},
		adjustCanvas: function() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		},
		switchShape: function(shape) {
			particles = shape;
		},
		loop: function() {
			this.clear();
			this.draw();
			requestFrame.call(window, this.loop.bind(this));
		},
		draw: function() {
			particles.forEach(function(p) {
				p.update();
				p.draw(context);
			});
		},
		clear: function() {
			context.clearRect(0, 0, canvas.width, canvas.height);
		}
	};
})();