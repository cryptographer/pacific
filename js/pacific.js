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
        this.game.load.script('LoadScript', 'js/load.js');
    },

    create: function() {
        this.game.stage.backgroundColor = '#444444';
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        this.game.state.add('Load', Pacific.Load, true);
    }
};

Pacific.game.state.add('Boot', Pacific.Boot, true);
