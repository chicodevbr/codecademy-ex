let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let target = () => {
  return Math.floor(Math.random() * 9);
};

let compareGuesses = (human, computer, target) => {
  const userGuess = Math.abs(target - human);
  const computerGuess = Math.abs(target - computer);
  return userGuess <= computerGuess;
};

let updateScore = winner => {
  if(winner === 'human'){
    humanScore += 1;
  } else if (winner === 'computer'){
    computerScore +=1;
  } 
};

let advanceRound = () => {
  currentRoundNumber +=1;

};

updateScore('human');
console.log(humanScore); // To confirm that this value increased by 1
updateScore('computer');
console.log(computerScore); // To confirm that this value increased by 1
