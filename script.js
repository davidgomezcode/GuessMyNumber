'use strict';

// Variables

let number = document.querySelector('.number'); //interrogación Grande
let text1 = document.querySelector('.message'); // Mensaje de "Start Guessing"
let guessNumber = document.querySelector('.guess'); // input - caja grande donde pongo el número
let score = document.querySelector('.score'); // "Oportunidades restantes
let highscore = document.querySelector('.highscore');
let body = document.querySelector('body');

//Selector botones:
let btnCheck = document.querySelector('.check'); // Botón para validar.
let btnAgain = document.querySelector('.again'); // Botón para recargar la página.

//Genera número aleatorio
let secretNumber = parseInt(Math.random() * 20) + 1;

// Funciones
//Cambio del highscore
function changeHighscore() {
  if (score.textContent > highscore.textContent) {
    highscore.textContent = score.textContent;
  } else if (highscore.textContent > score.textContent) {
    highscore.textContent = highscore.textContent;
  }
}

//Cambio del mensaje.
function mensaje(mensaje) {
  text1.textContent = mensaje;
}
//Función que compara el guess con el secretNumber
const validarGuess = function () {
  const guess = Number(guessNumber.value);
  //Validación del guess. Si no hay guess:
  if (!guess) {
    mensaje('⛔ No number!');
  }
  //Si es igual, gana
  else if (guess == secretNumber) {
    mensaje('Congratulations!! 🎈✨ You have guessed the secret number!');
    body.style.backgroundColor = '#2daa38';
    number.textContent = secretNumber;
    changeHighscore();
  }
  //Si es diferente, se evalua con el ternario si es superior o inferior.
  else if (guess !== secretNumber) {
    score.textContent--;
    mensaje(guess > secretNumber ? 'No, too high' : 'No, too low');
  }
  //Llegar a cero oportunidades
  if (score.textContent == 0) {
    mensaje('🤡 Yo lost the game!🤡');
    body.style.backgroundColor = '#9b3030';
  }
};

// Se validan variables con el botón check o con enter.
btnCheck.addEventListener('click', validarGuess);
addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    validarGuess();
  }
});

// Botón Again
btnAgain.addEventListener('click', function () {
  mensaje('Start guessing...');
  score.textContent = '5'; // reestablece oportunidades
  secretNumber = parseInt(Math.random() * 20) + 1; // reestablece numero aleatorio
  number.textContent = '?'; // reestablece interrogación
  guessNumber.value = ''; // reestablece input - caja grande donde pongo el número.
  body.style.backgroundColor = '#222222'; // reestablece color de fondo
});
