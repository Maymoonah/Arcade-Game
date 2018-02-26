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

// Enemy constructor function
var Enemy = function() {
    //coordinates for enemies
    this.x = 0;
    //add random points for y to allow enemies to appear on random rows
    this.pointY = [140, 220, 305];
    this.y = this.pointY[Math.floor(Math.random() * Math.floor(3))];

    //enemy width and height
    this.enemyWidth = 99;
    this.enemyHeight = 70;

    //add random speed for each enemy
    this.speed = Math.floor(Math.random() * 200) + 1;

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

// Update the enemy's position
Enemy.prototype.update = function(dt) {
    // multiply any movement by the dt parameter which will ensure the game runs at the same speed for all computers.
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

        //set score to 0
        player.count = 0;
        $('#score').text(this.count);
    }
};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player constructor function
let Player = function() {
    //player's position
    this.x = 220;
    this.y = 500;
    this.count = 0;

    //player's width and height
    this.playerWidth = 80;
    this.playerHeight = 91;

    //image for player
    this.sprite = 'images/char-boy.png';
    this.location = function() {
        img.onload = function () {
            ctx.drawImage(img, x, y);
        }
        img.src = 'images/char-boy.png';
    }
}

Player.prototype.update = function() {
    //don't allow player to go off canvas
    //checking x position
    if(this.x > ctx.canvas.width - this.playerWidth) {
        this.x = 450;
    }
    if(this.x < 0) {
        this.x = 0;
    }

    //check y position
    if(this.y > ctx.canvas.height - this.playerHeight) {
        this.y = 500;
    }
    if(this.y < 0) {
        this.y = 0;
    }

    //return player to default position if player reaches the water
    if(player.y === 0) {
        player.x = 200;
        player.y = 400;
        this.count++;
        $('#score').text(this.count);
    }
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {

    this.key = key;

    //move player in direction of key pressed
    switch(this.key) {
        case 'left':
            this.x -= 80;
            break;
        case 'up':
            this.y -= 80;
            break;
        case 'right':
            this.x += 80;
            break;
        case 'down':
            this.y += 80;
            break;
        default:
            this.x = 200;
            this.y = 400;
        }
}

//Gem constructor function to add gems to arcade game
let Gem = function(gem) {
    //gem's position
    this.x = Math.floor(Math.random() * 400) + 1;
    this.y = Math.floor(Math.random() * (400 - 60 + 1) ) + 60;
    this.count = 0;

    //set number of gems collected to 0
    this.countB = 0;
    this.countG = 0;
    this.countO = 0;
    this.countS = 0;
    this.countH = 0;

    //player's width and height
    this.gemWidth = 20;
    this.gemHeight = 30;

    //images for gems
    this.sprite = `images/${gem}.png`;
    this.location = function() {
        img.onload = function () {
            ctx.drawImage(img, x, y);
        }
        img.src = `images/${gem}.png`;
    }
}

//render gems to screen
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Update the gems
Gem.prototype.update = function(dt) {
    //check if player picks gem up
    if (player.x < this.x + this.gemWidth && player.x + player.playerWidth > this.x &&
        player.y < this.y + this.gemHeight && player.playerHeight + player.y > this.y) {

        //remove gem

        //increment gem count
        if(this.sprite === 'images/Gem-Blue.png') {
            this.countB++;
            $('#countB').text(this.countB);
            console.log(this.countB);
        }
        else if(this.sprite === 'images/Gem-Green.png') {
            this.countG++;
            $('#countG').text(this.countG);
        }
        else if(this.sprite === 'images/Gem-Orange.png') {
            this.countO++;
            $('#countO').text(this.countO);
        }
        else if(this.sprite === 'images/Star.png') {
            this.countS++;
            $('#countS').text(this.countS);
        }
        else {
            this.countH++;
            $('#countH').text(this.countH);
        }
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let player = new Player();
let allEnemies = [new Enemy(), new Enemy(), new Enemy(), new Enemy()];
let blueGem = new Gem('Gem-Blue');
let greenGem = new Gem('Gem-Green');
let orangeGem = new Gem('Gem-Orange');
let star = new Gem('Star');

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
