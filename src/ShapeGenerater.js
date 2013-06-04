(function() {
	var gap = 13,
		shapeCanvas = document.createElement('canvas'),
		shapeContext = shapeCanvas.getContext('2d'),
		fontSize = 500,
		fontFamily = 'Avenir, Helvetica Neue, Helvetica, Arial, sans-serif';

	function setFontSize(s) {
		shapeContext.font = 'bold ' + s + 'px ' + fontFamily;
	}

	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function fit() {
		shapeCanvas.width = Math.floor(window.innerWidth / gap) * gap;
		shapeCanvas.height = Math.floor(window.innerHeight / gap) * gap;
		shapeContext.fillStyle = 'red';
		shapeContext.textBaseline = 'middle';
		shapeContext.textAlign = 'center';
	}

	function processCanvas() {
		var pixels = shapeContext.getImageData(0, 0, shapeCanvas.width, shapeCanvas.height).data,
			particles = [],
			x = 0,
			y = 0;

		for (var p = 0; p < pixels.length; p += (4 * gap)) {
			if (pixels[p + 3] > 0) {
				particles.push(new Particle({
					x: x,
					y: y
				}, 5, new Style(pixels[p], pixels[p + 1], pixels[p + 2], pixels[p + 3])));
			}

			x += gap;

			if (x >= shapeCanvas.width) {
				x = 0;
				y += gap;
				p += gap * 4 * shapeCanvas.width;
			}
		}

		return particles;
	}

	window.ShapeGenerater = {
		init: function() {
			fit();
		},
		letter: function(text) {
			var s = 0;

			setFontSize(fontSize);
			s = Math.min(fontSize, (shapeCanvas.width / shapeContext.measureText(text).width) * 0.8 * fontSize, (shapeCanvas.height / fontSize) * (isNumber(text) ? 1 : 0.45) * fontSize);
			setFontSize(s);

			shapeContext.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height);
			shapeContext.fillText(text, shapeCanvas.width / 2, shapeCanvas.height / 2);

			return processCanvas();
		},
		imageFile: function(image) {
			shapeContext.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height);
			shapeContext.drawImage(image, 0, 0, image.width, image.height, (shapeCanvas.width - shapeCanvas.height * 0.8) / 2, (shapeCanvas.height - shapeCanvas.height * 0.8) / 2, shapeCanvas.height * 0.8, shapeCanvas.height * 0.8);
			return processCanvas();
		}
	};
})()