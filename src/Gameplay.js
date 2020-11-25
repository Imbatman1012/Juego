
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('background', 'assets/images/background.jpg');
    	game.load.spritesheet('jug','assets/images/negra.png', 64, 66, 16);
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
        /*this.jug = game.add.sprite(0,0,'jug');*/
        player = game.add.sprite(game.world.centerX, game.world.centerY, 'jug');
        /*this.jug.frame = 0;
        this.jug.x = game.width/2;
        this.jug.y = game.height/2;
        this.jug.anchor.setTo(0.5);
        this.jug.angle = 0;
        this.jug.scale.setTo(1.5);*/
        player.anchor.setTo(0.5,0.5);
        player.scale.setTo(3)



        player.animations.add('down', [0,3]);
        player.animations.add('left', [4,7]);
        player.animations.add('right', [8,11]);
        player.animations.add('up', [12,15]);

        
        cursors = game.input.keyboard.createCursorKeys();
                 
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.enable(player);
                 
    },
    update: function(){
    	player.body.velocity.x = 0;
    	player.body.velocity.y = 0;

                if (cursors.left.isDown)
                {
                    player.body.velocity.x = -90;
                    player.animations.play('left', 4, true);
                }

                else if (cursors.right.isDown)
                {
                    player.body.velocity.x = 90;
                    player.animations.play('right', 4, true);
                }
                else if (cursors.up.isDown)
                {
                    player.body.velocity.y = -90;
                    player.animations.play('up', 4, true);
                }
                 else if (cursors.down.isDown)
                {
                    player.body.velocity.y = 90;
                    player.animations.play('down', 4, true);
                }
                else
                {
                     player.animations.stop();
                }
    }
}

var player;
var cursors;

var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");