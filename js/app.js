//variables
let char;

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
        char = $(this);
        console.log(char.html());
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


// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.location = function() {
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
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
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function(x, y) {
    
}

Player.prototype.update = function() {

}

Player.prototype.render = function() {

}

Player.prototype.handleInput = function() {

}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let player = new Player();
let allEnemies = [new Enemy(), new Enemy(), new Enemy];


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
