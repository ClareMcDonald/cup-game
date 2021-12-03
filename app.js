// import functions and grab DOM elements
const cupOne = document.getElementById('cup-one');
const cupTwo = document.getElementById('cup-two');
const cupThree = document.getElementById('cup-three');

const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');

const correctEl = document.getElementById('correct-guesses');
const incorrectEl = document.getElementById('incorrect-guesses');
const totalEl = document.getElementById('total-played');

function reset() {
    cupOne.src = './assets/cup.png';
    cupTwo.src = './assets/cup.png';
    cupThree.src = './assets/cup.png';
}

function displayCount() {
    correctEl.textContent = wins;
    incorrectEl.textContent = totalGames - wins;
    totalEl.textContent = totalGames;
}


// let state
let wins = 0;
let losses = 0;
let totalGames = 0;

const hidingPlaces = [
    'cup-one',
    'cup-two',
    'cup-three'
];

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

function handleGuess(userGuess, correctSpot) {
    reset();
    totalGames++;
    // get element for correct cup
    // let correctSpotId = getRandomItem(hidingPlaces);
    let correctSpotEl = document.getElementById(correctSpot);
        //change image source for element for correct cup
    correctSpotEl.src = './assets/correct-cup.png';
    //write logic if statement to icrement state if user guesses correctly 
    if (userGuess === correctSpot) {
        wins++;
    }
    //update the dom to reflect the changes in state
    correctEl.textContent = wins;
    incorrectEl.textContent = totalGames - wins;
    totalEl.textContent = totalGames;

}

// set event listeners 
buttonOne.addEventListener('click', () => {
    const correctCup = getRandomItem(hidingPlaces);
    handleGuess('cup-one', correctCup);

    // const randomCup = Math.floor(Math.random() * 3);
    // if (randomCup === 0) {
    //     wins++;
    //     cupOne.src = './assets/correct-cup.png';
    // } else if (randomCup === 1) {
    //     cupTwo.src = './assets/correct-cup.png';
    // } else if (randomCup === 2) {
    //     cupThree.src = './assets/correct-cup.png';
    // }
    // totalGames++;
    // console.log(randomCup);
    // displayCount();
});

buttonTwo.addEventListener('click', () => {
    const correctCup = getRandomItem(hidingPlaces);
    handleGuess('cup-two', correctCup);

    // const randomCup = Math.floor(Math.random() * 3);
    // if (randomCup === 0) {
    //     cupOne.src = './assets/correct-cup.png';
    // } else if (randomCup === 1) {
    //     wins++;
    //     cupTwo.src = './assets/correct-cup.png';
    // } else if (randomCup === 2) {
    //     cupThree.src = './assets/correct-cup.png';
    // }

    totalGames++;

    displayCount();
});

buttonThree.addEventListener('click', () => {
    const correctCup = getRandomItem(hidingPlaces);
    handleGuess('cup-three', correctCup);

    // const randomCup = Math.floor(Math.random() * 3);
    // if (randomCup === 0) {
    //   cupOne.src = './assets/correct-cup.png';
    // } else if (randomCup === 1) {
    //   cupTwo.src = './assets/correct-cup.png';
    // } else if (randomCup === 2) {
    //  wins++;
    //   cupThree.src = './assets/correct-cup.png';
    //}

    totalGames++;

    displayCount();
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
