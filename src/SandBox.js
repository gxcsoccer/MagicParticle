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
			var current = particles.length,
				total = shape.length,
				size = total - current,
				i = 0,
				wx = canvas.width / 2, 
				wy = canvas.height / 2,
				now;

			if (size > 0) {
				for (; i < size; i++) {
					particles.push(new Particle({
						x: wx,
						y: wy
					}, 5));
				}
			}

			now = particles.length;

			for(i = 0; i < now; i++) {
				if(i < total) {
					particles[i].step.push(shape[i].pos);
					particles[i].style = shape[i].style;
				} else {
					particles[i].style = new Style(0,0,0,0);
				}
			}
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