var S = {
    init: function() {
        // var action = window.location.href,
        //     i = action.indexOf('?a=');
        S.Drawing.init('.canvas');
        S.ShapeBuilder.init();
        S.Shape.switchShape(S.ShapeBuilder.letter("Fuck"));
        //S.UI.init();

        // if (i !== -1) {
        //     S.UI.simulate();
        // } else {
        //     S.UI.simulate('Shape|Shifter|Type|to start|#icon thumbs-up|#countdown 3||');
        // }
        S.Drawing.loop(function() {
            S.Shape.render();
        });
    }
};

window.addEventListener('load', function() {
    S.init();
}, false);