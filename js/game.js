Pacific.Game = function(){};

Pacific.Game.prototype = {
    create: function() {
        this.map = this.game.add.tilemap('map');
        this.map.addTilesetImage('tiles', 'tiles');
        this.ground = this.map.createLayer('ground');
        this.obstacles = this.map.createLayer('obstacles');
        this.map.setCollision(2, true, 'obstacles');
        this.ground.resizeWorld();

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.player = this.game.add.sprite(
            this.game.world.centerX,
            this.game.world.centerY,
            'player'
        );
        this.player.anchor.set(0.5, 0.5);
        this.player.frame = 1;
        this.game.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;

        this.game.camera.x = this.player.position.x - (this.game.camera.width / 2);
        this.game.camera.y = this.player.position.y - (this.game.camera.height / 2);
        this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_TOPDOWN);
    },

    update: function() {
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;
        this.game.physics.arcade.collide(this.player, this.obstacles);

        if(this.cursors.up.isDown) {
            this.player.frame = 0;
            this.player.body.velocity.y = -100;
        } else if(this.cursors.down.isDown) {
            this.player.frame = 1;
            this.player.body.velocity.y = 100;
        }

        if(this.cursors.left.isDown) {
            this.player.frame = 2;
            this.player.body.velocity.x = -100;
        } else if(this.cursors.right.isDown) {
            this.player.frame = 3;
            this.player.body.velocity.x = 100;
        }
    }
};
