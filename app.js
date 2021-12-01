// import functions and grab DOM elements
const cupOne = document.getElementById('cup-one');
const cupTwo = document.getElementById('cup-two');
const cupThree = document.getElementById('cup-three');

const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');

const correct = document.getElementById('correct-guesses');
const incorrect = document.getElementById('incorrect-guesses');
const total = document.getElementById('total-played');

function reset() {
    cupOne.src = './assets/cup.png';
    cupTwo.src = './assets/cup.png';
    cupThree.src = './assets/cup.png';
}

function displayCount() {
    correct.textContent = wins;
    incorrect.textContent = totalGames - wins;
    total.textContent = totalGames;
}


// let state
let wins = 0;
let losses = 0;
let totalGames = 0;

// set event listeners 
buttonOne.addEventListener('click', () => {
    reset();

    const randomCup = Math.floor(Math.random() * 3);
    if (randomCup === 0) {
        wins++;
        cupOne.src = './assets/correct-cup.png';
    } else if (randomCup === 1) {
        cupTwo.src = './assets/correct-cup.png';
    } else if (randomCup === 2) {
        cupThree.src = './assets/correct-cup.png';
    }
    totalGames++;
    console.log(randomCup);
    displayCount();
});

buttonTwo.addEventListener('click', () => {
    reset();

    const randomCup = Math.floor(Math.random() * 3);
    if (randomCup === 0) {
        cupOne.src = './assets/correct-cup.png';
    } else if (randomCup === 1) {
        wins++;
        cupTwo.src = './assets/correct-cup.png';
    } else if (randomCup === 2) {
        cupThree.src = './assets/correct-cup.png';
    }

    totalGames++;

    displayCount();
});

buttonThree.addEventListener('click', () => {
    reset();

    const randomCup = Math.floor(Math.random() * 3);
    if (randomCup === 0) {
        cupOne.src = './assets/correct-cup.png';
    } else if (randomCup === 1) {
        cupTwo.src = './assets/correct-cup.png';
    } else if (randomCup === 2) {
        wins++;
        cupThree.src = './assets/correct-cup.png';
    }
  
    totalGames++;

    displayCount();
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
