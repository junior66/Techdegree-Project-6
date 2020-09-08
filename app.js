const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const ul = document.createElement('ul');
const li = document.createElement('li');
let missed = 0;

const phrases = ['Tree House', 
                'Jazz Music',
                'Brain Fart',
                'Midnight Sun',
                'Four Seasons'

]

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    startButton.style.display = 'flex';


});


// return a random phrase from an array
const getRandomPhraseAsArray = arr => {
    let randomNumber = Math.floor(Math.random() * arr.length);
    let randomPhrase = arr[randomNumber].split('');
    return randomPhrase;

}

getRandomPhraseAsArray(phrases);

// adds the letters of a string to the display
const addPhraseToDisplay = arr => {
    for(i = 0; i < arr.length; i++) {
        li.textContent = arr[i];
        ul.appendChild(li);
        if(arr[i] !== '') {
            li.classList.add("letter");
        } else {
            li.classList.add('space');
            }
        }
        
    }

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 

// check if a letter is in the phrase
const checkLetter = button => {
    let li = ul.children;
    let match = null;
    for(i = 0; i < li.length; i++) {
        if(button.textContent === li[i].textContent) {
            li.classList.add("show");
            match = button.textContent;
            }
        }
        return match;
    }

console.log(checkLetter(qwerty));


    // listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {

});

// check if the game has been won or lost
const checkWin = () => {

}










