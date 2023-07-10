import getRandomWord from './src/randomWord.js';
import './style.css';
import setSharkImage from './src/sharkImage.js';
import { setupWord, isLetterInWord, revealLetterInWord } from './src/word.js';
import setupGuesses from './src/guess.js'


document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;



const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);

  setSharkImage(document.querySelector('#shark-img'), numWrong);

  setupWord(word, document.querySelector("#word-container"));

  let handleGuess = (guessEvent, letter) =>
  {
    let button = guessEvent.target;
    button.setAttribute('disabled', true);

    if (isLetterInWord(letter))
    {
      revealLetterInWord(letter)
    }
    else
    {
      numWrong += 1;
      setSharkImage(document.querySelector('#shark-img'), numWrong);
    }

    if (numWrong > 4)
    {
      document.querySelectorAll('button').forEach((btn) =>
      {
        btn.setAttribute('disabled', true);
      })
      document.querySelector("#game-status").innerHTML = `<section id="game-status">You lose!</section>`
    }
    
    let isWordComplete = true;
    for (let x of document.querySelectorAll('.letter-box'))
    {
      if (x.innerText === '')
      {
        isWordComplete = false;
      }
    }

    if (isWordComplete === true)
    {
      document.querySelectorAll('button').forEach((btn) =>
      {
        btn.setAttribute('disabled', true);
      })
      document.querySelector("#game-status").innerHTML = `<section id="game-status">You Win!</section>`
    }
  }

  setupGuesses(document.querySelector("#letter-buttons"), handleGuess)

};

initSharkwords();



