const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
let missed = 0;

const phrases = ['Tree House', 
                'Jazz Music',
                'Brain Fart',
                'Midnight Sun',
                'Four Seasons'

]

// return a random phrase from an array
const getRandomPhraseAsArray = arr => {
    let randomNumber = Math.floor(Math.random() * phrases.length);
    let randomPhrase = phrases[randomNumber].split('');
    return randomPhrase;

}

getRandomPhraseAsArray(phrases);

// adds the letters of a string to the display
const addPhraseToDisplay = arr => {
    for(i = 0; i < phrases.length; i++) {
        const li = document.createElement('li');
        li.appendChild(phrases);
        phrase.appendChild(li);
    }
    
    if(phrases !== '') {
        li.classList.add("letter");
    }

}

const phraseArray = getRandomPhraseAsArray(phrases);
console.log(addPhraseToDisplay(phraseArray)); 



// check if a letter is in the phrase
const checkLetter = button => {

}

// check if the game has been won or lost
const checkWin = () => {

}

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    startButton.style.display = 'flex';


});

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {

});
