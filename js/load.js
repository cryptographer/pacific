Pacific.Load = function(){};

Pacific.Load.prototype = {
    preload: function() {
        this.game.load.image('logo', 'img/logo.png');
    },

    create: function() {
        this.logo = this.game.add.image(
            this.game.world.centerX,
            this.game.world.centerY,
            'logo'
        );

        this.logo.anchor.set(0.5, 0.5);
    }
};
