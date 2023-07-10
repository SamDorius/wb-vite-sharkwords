let word;

function setupWord(initWord, element) 
{
    word = initWord;

    word.split('').forEach(() =>
    {
        element.insertAdjacentHTML('beforeend', '<div class="letter-box"></div>')
    })
}

function isLetterInWord(letter) 
{
    return word.includes(letter)
}

function revealLetterInWord(letter) 
{
    let list = document.querySelectorAll(".letter-box")

    word.split('').forEach((wordLetter, i) =>
    {
        if (wordLetter === letter)
        {
            list[i].innerHTML = letter;
        }
    })
}

export {setupWord, isLetterInWord, revealLetterInWord}

