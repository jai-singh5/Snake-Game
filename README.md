# Snake Game Website

This is a simple Snake game implemented using HTML, CSS, and JavaScript. The player controls a snake to eat food, and with each piece of food eaten, the snake grows longer. The goal is to avoid running into the walls or the snake's own body while eating as much food as possible.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Game Mechanics](#game-mechanics)
- [Code Overview](#code-overview)
- [Contributing](#contributing)
- [License](#license)

## Features

- Classic Snake gameplay
- Smooth animations and controls
- Sound effects for food collection, movement, and game over
- Background music for an enhanced gaming experience
- Score display

## Installation

To run this game locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/jai-singh5/Snake-Game.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd snake-game
    ```

3. **Open the `index.html` file in a web browser:**

    You can double-click on the `index.html` file or open it using a web server of your choice.

## Usage

- Use the arrow keys (`↑`, `↓`, `←`, `→`) on your keyboard to control the direction of the snake.
- The game starts when you press any arrow key.
- The objective is to eat the food that appears on the board, making the snake grow longer.
- Avoid hitting the walls or the snake's own body, or the game will be over.

## Game Mechanics

### Game Constants

- `inputDir`: Direction of the snake's movement.
- `foodSound`: Sound played when the snake eats food.
- `gameOver`: Sound played when the game is over.
- `moveSound`: Sound played when the snake changes direction.
- `musicSound`: Background music that plays during the game.
- `speed`: The speed of the snake's movement.
- `lastPaintTime`: Used to manage the speed of the game loop.
- `snakeArr`: Array representing the snake's body segments.
- `food`: Coordinates of the food on the game board.

### Game Functions

- `main()`: The main game loop function that is called continuously using `requestAnimationFrame`.
- `isCollide()`: Checks if the snake has collided with itself or the walls.
- `gameEngine()`: The core function that handles the game's logic, including snake movement, collision detection, food generation, and rendering.

## Code Overview

- **HTML**: The structure of the game is defined in `index.html`, which includes a game board where the snake and food are displayed.

- **CSS**: Styling is applied through `style.css` to create the look and feel of the game, including the snake, food, and game board.

- **JavaScript**: The game logic is implemented in `script.js`. Key functionalities include:
  - Handling snake movement and direction changes based on user input.
  - Detecting collisions with walls or the snake's own body.
  - Managing the game's score and displaying it on the screen.
  - Playing sound effects and background music.

### Example Code Snippet

```javascript
// Check for collision with the walls or self
function isCollide(snake) {
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }

    }
    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }
}
```

##  Contributing
Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request. Please make sure to test your changes before submitting.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request
