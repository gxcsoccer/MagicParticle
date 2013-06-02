(function() {
	var Particle = function(pos, radius, style) {
			this.pos = pos;
			this.radius = radius;
			this.style = style || Style.defaultStyle;
			this.step = [];
			this.target = null;
		};

	Particle.prototype = {
		draw: function(context) {

		},
		update: function() {

		}
	};

	window.Particle = Particle;
})();