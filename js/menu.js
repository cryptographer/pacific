Pacific.Menu = function(){};

Pacific.Menu.prototype = {
    preload: function() {
        this.load.script('GameScript', 'js/game.js');
    },

    create: function() {
        this.game.stage.backgroundColor = '#ffffff';

        this.startButton = this.game.add.text(
            this.game.world.centerX,
            this.game.world.centerY,
            'Start'
        );
        this.startButton.anchor.set(0.5, 0.5);
        this.startButton.inputEnabled = true;
        this.startButton.events.onInputUp.add(function() {
            this.state.add('Game', Pacific.Game, true);
        }, this);
    }
};
