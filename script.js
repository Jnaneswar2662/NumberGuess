// Game state variables
let randomNumber = generateRandomNumber();
let attempts = 0;

// Generate random number 1-100
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Elements
const guessInput = document.getElementById('guessInput');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const submitBtn = document.getElementById('submitBtn');
const restartBtn = document.getElementById('restartBtn');

// Event listeners
submitBtn.addEventListener('click', checkGuess);
guessInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    checkGuess();
  }
});
restartBtn.addEventListener('click', restartGame);

// Check user's guess
function checkGuess() {
  const guess = Number(guessInput.value.trim());

  // Validate input
  if (!guess || guess < 1 || guess > 100) {
    setFeedback('⚠️ Please enter a number between 1 and 100.', 'orange');
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    setFeedback(`🎉 Amazing! You guessed it in ${attempts} attempt${attempts > 1 ? 's' : ''}!`, 'limegreen');
    disableInput();
  } else if (guess > randomNumber) {
    setFeedback('📉 Too high! Try a smaller number.', 'tomato');
  } else {
    setFeedback('📈 Too low! Try a bigger number.', 'tomato');
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  guessInput.value = '';
  guessInput.focus();
}

// Set feedback message with color
function setFeedback(message, color) {
  feedback.textContent = message;
  feedback.style.color = color;
}

// Disable input and submit button after win
function disableInput() {
  guessInput.disabled = true;
  submitBtn.disabled = true;
  guessInput.style.opacity = '0.6';
  submitBtn.style.opacity = '0.6';
}

// Restart the game state
function restartGame() {
  randomNumber = generateRandomNumber();
  attempts = 0;
  guessInput.disabled = false;
  submitBtn.disabled = false;
  guessInput.style.opacity = '1';
  submitBtn.style.opacity = '1';
  guessInput.value = '';
  feedback.textContent = '';
  attemptsDisplay.textContent = '';
  guessInput.focus();
}
