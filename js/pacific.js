var Pacific = Pacific || {};

Pacific.game = new Phaser.Game(
    640, 
    360,
    Phaser.AUTO,
    ''
);

Pacific.Boot = function(){};

Pacific.Boot.prototype = {
    preload: function() {
        this.load.image('bar', 'img/bar.png');
        this.load.image('logo', 'img/logo.png');
        this.load.script('LoadScript', 'js/load.js');
    },

    create: function() {
        this.game.stage.backgroundColor = '#444444';
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        this.state.add('Load', Pacific.Load, true);
    }
};

Pacific.game.state.add('Boot', Pacific.Boot, true);
