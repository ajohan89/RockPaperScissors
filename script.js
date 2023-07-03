//DOM manipulation
const rpcGuess = document.querySelector('.rpcGuess');
const compGuess = document.querySelector('.compGuess');
const playerGuess = document.querySelector('.playerGuess');
const guessSubmit = document.querySelector('.guessSubmit');

// Variables
const userGuess = guessField.value;

// Conditional logic
function checkGuess(){
    if (userGuess === 'Rock'){
        console.log('True');
    } else{
        console.log('False');
    }
}
guessSubmit.addEventListener('click', checkGuess);



