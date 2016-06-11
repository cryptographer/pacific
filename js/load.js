Pacific.Load = function(){};

Pacific.Load.prototype = {
    preload: function() {
        this.logo = this.add.image(
            this.game.world.centerX,
            this.game.world.centerY,
            'logo'
        );
        this.logo.anchor.set(0.5, 0.5);

        this.bar = this.add.sprite(
            this.game.world.centerX,
            this.game.world.height - 64,
            'bar'
        );
        this.bar.anchor.set(0.5, 0.5);
        this.load.setPreloadSprite(this.bar);

        this.load.image('tiles', 'img/tiles.png');
        this.load.script('MenuScript', 'js/menu.js');
        this.load.spritesheet('player', 'img/player.png', 16, 16, 4);
        this.load.tilemap(
            'map',
            'map/map.json',
            null,
            Phaser.Tilemap.TILED_JSON
        );
    },

    create: function() {
        this.state.add('Menu', Pacific.Menu, true);
    }
};
