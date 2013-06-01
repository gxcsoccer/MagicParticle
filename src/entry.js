var S = {
    init: function() {

        S.Drawing.init('.canvas');
        S.ShapeBuilder.init();
        S.Shape.switchShape(S.ShapeBuilder.letter("Hello :)"));
        S.Drawing.loop(function() {
            S.Shape.render();
        });
    }
};

window.addEventListener('load', function() {
    S.init();
}, false);