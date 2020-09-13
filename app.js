const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul')
let missed = 0;

const phrases = ['Tree House', 
                'Jazz Music',
                'Brain Fart',
                'Midnight Sun',
                'Four Seasons'

]

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    overlay.style.display = 'none';


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
        // create a new li element each time loop runs
        const li = document.createElement('li');
        // add letters to the li elements
        li.textContent = arr[i];
        ul.appendChild(li);
        if(arr[i] !== ' ') {
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
    let phraseLi = ul.children;
    let match = null;
    for(i = 0; i < phraseLi.length; i++) {
        const letter = phraseLi[i].textContent.toLowerCase();
        if(button.textContent === letter) {
            phraseLi[i].classList.add("show");
            match = true;
            }
        }
        return match;
    }

checkLetter(qwerty);


    // listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {
    // Use a conditional to filter out clicks that don’t happen on the buttons or if the
    // button already has the “chosen” class
    if(e.target.tagName === 'BUTTON') {
        // Add the “chosen” class to the button that was pressed.
        e.target.classList.add('chosen');
        e.target.setAttribute('disabled', true);
        // Call the checkLetter function and store the results in a variable.
        const match = checkLetter(e.target);
        // If the checkLetter function does not find a letter, remove one of the heart
        // images and increment the missed counter
        if(!match) {
            const tries = document.querySelectorAll('.tries')
            tries[missed].style.display = 'none';
            missed++;
        }

        }

});

// check if the game has been won or lost
const checkWin = () => {

}










