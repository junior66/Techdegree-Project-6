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

}

// adds the letters of a string to the display
const addPhraseToDisplay = arr => {

}

// check if a letter is in the phrase
const checkLetter = button => {

}

// check if the game has been won or lost
const checkWin = () => {

}

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    startButton.style.display = 'hidden';


});

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {

});
