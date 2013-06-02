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
			context.fillStyle = this.style.render();
			context.beginPath();
			context.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, true);
			context.closePath();
			context.fill();
		},
		update: function() {
			if (!this._moveTowards(this.target)) {
				this.target = this.step.shift();
			}

			if (this.target) {
				this.pos.x += (this.target.x - this.pos.x) * 0.14;
				this.pos.y += (this.target.y - this.pos.y) * 0.14;
			}
		},
		_moveTowards: function(target) {
			if (!target) {
				return false;
			}

			var dist = this._distanceTo(target);
			return dist > 1;
		},
		_distanceTo: function(target) {
			var dx = target.x - this.pos.x,
				dy = target.y - this.pos.y;
			return Math.sqrt(dx * dx + dy * dy);
		}
	};

	window.Particle = Particle;
})();