Pacific.Menu = function(){};

Pacific.Menu.prototype = {
    create: function() {
        this.startButton = this.game.add.text(
            this.game.world.centerX,
            this.game.world.centerY,
            'Start'
        );

        this.startButton.anchor.set(0.5, 0.5);
    }
};
