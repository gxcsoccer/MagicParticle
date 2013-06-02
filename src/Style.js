(function() {
	var Style = function(r, g, b, a) {
			this.r = r;
			this.g = g;
			this.b = b;
			this.a = a;
		};

	Style.prototype.render = function() {
		return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.a + ')';
	};

	Style.defaultStyle = new Style(255, 255, 255, 1);

	window.Style = Style;
})();