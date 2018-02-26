/**************Code for game Modal to choose Player*****************/
let pic;

//add sounds when mouse hovers or clicks on players and button
//on Mouse Enter
function playSounds() {
    let sound = document.getElementsByTagName('audio')[0];
    let li = $('li');
    //play sounds
    li.on('mouseenter', function() {
        sound.play();
    });

    li.on('click', function() {
        sound.play();
    
        pic = $(this).find("img").attr("src") ;
        console.log(pic);
    });

    $('#start').on('click', function() {
        sound.play();
        hideModal();
    });
}

//hideModal function
function hideModal() {
    $('#gameModal').css('display', 'none');
}

//call playSounds
playSounds();

//add css styling when player is clicked
$('li').on('click', function() {
    let self = $(this);
    //if li has class, remove it
    if(self.hasClass('selected')) {
        self.removeClass('selected');
    } else {
        //add selected class only to clicked item
        $('li').each(function() {
            $(this).removeClass('selected');
        });
        setTimeout(function() {
            self.addClass('selected');
        }, 100);
    }
});

/********************************Code For the Game***********************************/


// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.x = x;
    this.y = y;

    //enemy width and height
    this.enemyWidth = 101;
    this.enemyHeight = 171;

    //add random speed for each enemy
    this.speed = Math.floor(Math.random() * 350) + 1;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.location = function() {
        img.onload = function () {
            ctx.drawImage(img, x, y);
        }
        img.src = 'images/enemy-bug.png';
    }
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if(this.x > 506) {
        this.x = 0;
    }

    //check for player collision with enemy
    if (player.x < this.x + this.enemyWidth && player.x + player.playerWidth > this.x &&
        player.y < this.y + this.enemyHeight && player.playerHeight + player.y > this.y) {

        //if player and enemies collide, set player position to default position
        player.x = 200;
        player.y = 400;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function(x, y) {
    //player's position
    this.x = x;
    this.y = y;

    //player's width and height
    this.playerWidth = 101;
    this.playerHeight = 171;

    this.sprite = 'images/char-horn-girl.png';
    this.location = function() {
        img.onload = function () {
            ctx.drawImage(img, x, y);
        }
        img.src = 'images/char-horn-girl.png';
    }
}

Player.prototype.update = function() {
    //don't allow player to go off canvas
    //checking x position
    if(this.x > ctx.canvas.width) {
        this.x = 450;
    }
    if(this.x < 0) {
        this.x = 0;
    }

    //check y position
    if(this.y > ctx.canvas.height) {
        this.y = 500;
    }
    if(this.y < 0) {
        this.y = 0;
    }
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {

    this.key = key;

    //move player in direction of key pressed
    if(this.key === 'left') {
        this.x -= 70;
    }

    if(this.key === 'up') {
        this.y -= 70;
    }

    if(this.key === 'right') {
        this.x += 70;
    }

    if(this.key === 'down') {
        this.y += 70;
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let player = new Player(200, 400);
let allEnemies = [new Enemy(0, 60), new Enemy(0, 60), new Enemy(0, 150), new Enemy(0, 235)];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
