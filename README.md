# Arcade-Game

This an Arcade game which has a player entity and several enemy bug entities. The goal of the game is to have the player cross
the field and reach the water without colliding into the enemy bugs. The player can also collect the gems that are spread out on
the field for gem points. There are a total of three levels in this game.

## Usage
* This app does not need any softwares or packages to be installed in order for it to be used. 
It works with all browsers and various devices. To my knowledge, there are no bugs in the app.

* To run the app, go to the Arcade-Game folder. 
Right click on *index.html*, and open the app with your preferred browser.

* When game loads, click on your preferred character, then click start to begin the game.

* To move the player around the field, use the arrows on your keyboard. When the player reaches the water safely without 
colliding into enemy bugs, the score will increment by 1.

* To pick up gems, also use the arrows on your keyboard. Move over the gem to collect it. Everytime you collect a gem, the 
gem counter for that type of gem will increment on the scoreboard.

* If player collides with enemy bugs, 1 life will be deducted from the heart on the scoreboard. If player runs out of all 5 lives,
the game ends. An alert pops up informing the player that the game is over. The game resets and the modal appears again so the
player can choose a character and play again if they wish to do so.

* Each time the player's score reaches 5, the player moves to the next level, and the enemy bugs' speed increases.

* If the player completes all 3 levels, an alert pops up informing the player that they have completed all 3 levels. The game
then resets and the modal reappears if the player wants to play again.
