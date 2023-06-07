'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // when the message value is 0 or empty
  if (!guess) {
    displayMessage('🚩 No number ');
  }

  // when you guess the number
  else if (guess === secretNumber) {
    displayMessage('👏 correct number');
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = score;

    //displaying highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '💹 Too high' : '🆙 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // when you lose the game
    else {
      displayMessage('☢ Game over. Try again...');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').style.color = 'red';
    }
  }

  if (guess < 0 || guess > 20) {
    displayMessage('👀 Please, enter the number between 1-20!');
    document.querySelector('.between').style.color = 'red';
  } else {
    document.querySelector('.between').style.color = '#eee';
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('💭 Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
