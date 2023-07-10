import sample from 'lodash.sample';
const words = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

function getRandomWord() 
{
  return words[Math.floor(Math.random()*words.length)]
}

export default getRandomWord;