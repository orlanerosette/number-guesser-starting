let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:



//  Step 3. Create generateTarget() function
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};
// This function returns a random integer between 0 and 9


// Step 8.2 Create alert() to tell user they are out of range
function alert(boolean) {
    if (true)  {
        return 'Out of range! Please choose a number between 0-9.';
    }
};

// Step 8.1 Create getAbsoluteDistance() function
const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1-num2)
 }


//  Step 4. Create a compareGuesses() function
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if(humanGuess > 9 || humanGuess < 0) {
        return alert(true); // if < 0 or > 9, out or range
    }
    else if (getAbsoluteDistance(targetGuess, humanGuess) <= getAbsoluteDistance(targetGuess, computerGuess)) {
        return true; // if abs distance of human is smaller or tied, human wins
    }
    else {
        return false; // if abs distance of computer is smaller, computer wins
    }
};


// Step 5. Create an updateScore() function
function updateScore(champ) {
    if (champ === 'human') {
        humanScore++; // if human wins, add 1
    }
    else if (champ === 'computer') {
        computerScore++; // if computer wins, add 1
    }
    else {
        return 'Error! String should be \'human\' or \'computer\''; // Catch any errors
    }
};


// Step 6 Create an advancedRound() function
const advanceRound = () => currentRoundNumber++;





/*
console.log(compareGuesses(4,1,2));
console.log(compareGuesses(17,8,6));
console.log(compareGuesses(5,9,3));
*/


