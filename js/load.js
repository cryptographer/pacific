Pacific.Load = function(){};

Pacific.Load.prototype = {
    preload: function() {
        this.game.load.image('logo', 'img/logo.png');
        this.game.load.script('MenuScript', 'js/menu.js');
    },

    create: function() {
        this.logo = this.game.add.image(
            this.game.world.centerX,
            this.game.world.centerY,
            'logo'
        );

        this.logo.anchor.set(0.5, 0.5);

        this.game.state.add('Menu', Pacific.Menu, true);
    }
};
