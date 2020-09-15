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
        if(e.target) {
            return checkWin(e.target);
        }
    }

});

// check if the game has been won or lost
const checkWin = (e) => {
    
    // Create a variable to store the li elements that have the class name “letter”
    let letterPhrase = ul.getElementsByClassName('letter');
    // Create a variable to store the li elements that have the class name “show”
    let showPhrase = ul.getElementsByClassName('show');
    // Check if the length of the 2 variables are the same. If they are, display the win
    // overlay
    if(letterPhrase.length === showPhrase.length) {
        // Create the win overlay by adding the “win” class to the start overlay.
        overlay.classList.add('win');
        // Change the headline text of the start overlay to show a person won.
        overlay.querySelector('h2').textContent = "Congratulations! You've won!";
        // Change the display property of the overlay to “flex”
        overlay.style.display = 'flex';
        // Create a reset button to play the game again
        overlay.querySelector('a').textContent = 'Play Again!';
        resetGame();

    }
    // Check if the missed counter is greater than 4. If they are, display the lose overlay
    if(missed > 4) {
        // Create the lose overlay by adding the “lose” class to the start overlay.
        overlay.classList.add('lose');
        // Change the headline text of the start overlay to show a person lost.
        overlay.querySelector('h2').textContent = "Sorry, You've lost :(";
        // Change the display property of the overlay to “flex”
        overlay.style.display = 'flex';
         // Create a reset button to play the game again
        overlay.querySelector('a').textContent = 'Play Again!';
        resetGame();
        
    }

}

function resetGame() {
    let keyboardBtn = document.querySelectorAll('.keyrow button');
    for (let i = 0; i < keyboardBtn.length; i++) {
        keyboardBtn[i].className = '';
        keyboardBtn[i].disabled = false;
    }
    
    ul.innerHTML = '';
    
    addPhraseToDisplay(getRandomPhraseAsArray(phrases));
    let liveHeart = null;
    for (let i = 0; i < liveHeart.length; i++) {
        liveHeart[i].className = 'tries';
        triesImg[i].src = 'images/liveHeart.png';
        missed = 0;
    }
}

// startButton.addEventListener('click', () => {
//     if (startButton.textContent === 'Start Game') {
//         overlay.style.display = 'none';
//     }
//     if (startButton.textContent === 'Play Again') {
//         resetGame();
//     }
     
    
// })






