const alphabet = 'abcdefghijklmnopqrstuvwxyz'; //initializing the alphabet

function setupGuesses(element, handleGuess) { //sets up function setupGuesses which takes two parameters, element, and handleGuess
  alphabet.split('').forEach((letter) => { //turns alphebet into array of every letter, and starts a forEach loop
    const btn = document.createElement('button'); //creates new button
    btn.innerText = letter; //adds current letter to the buttons inner html
    btn.addEventListener('click', (e) => handleGuess(e, letter)); //checks if the user clicks the button and calls the callback function handleGuess with the parameters e and letter
    element.append(btn); //adds button
  });
}

export default setupGuesses; //exports function so it can be used in main.js
