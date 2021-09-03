let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//Function 1: Random Number

function generateTarget(currentRoundNumber ){
    currentRoundNumber = Math.floor(Math.random()*10)
    return currentRoundNumber ;
  }
console.log(generateTarget())

//Function 2: user & computer guesses vs target number + Project Extension

function compareGuesses(userGuess,computerGuess,secretTargetNumber){
        if (userGuess > 9 || userGuess < 0){
            return window.alert('Number is out of range!')
        }
    
        let absoluteDistanceUser = Math.abs(secretTargetNumber - userGuess)
        let absoluteDistanceComp= Math.abs(secretTargetNumber - computerGuess)
        if (absoluteDistanceUser < absoluteDistanceComp){
            return true;
    
        }else{
            return false;
        }
    }

console.log(compareGuesses(-6,7,7))







/* Function 2: Material
function compareGuesses(userGuess,computerGuess,secretTargetNumber){
    
    if (secretTargetNumber <= userGuess && userGuess <= computerGuess){
        return true;

    }else if (secretTargetNumber >= userGuess && userGuess >= computerGuess){
        return true;
    
    }else{
        return false;
    }
}
console.log(compareGuesses(6,5,7))

//Function Project Extension Math.abs()
function getAbsoluteDistance(a,b){
    absoluteDistanceUser = Math.abs(secretTargetNumber - userGuess)
    absoluteDistanceComp= Math.abs(secretTargetNumber - computerGuess)
    if (absoluteDistanceUser < absoluteDistanceComp){
        return true;

    }else{
        return false;
    }
}
*/

//Function 3: Update score of the winner


function updateScore(winner){
    if (winner==='human'){
        humanScore=humanScore + 1
        return humanScore;
    }else{
        computerScore=computerScore +1;
        return humanScore;
    }
}


console.log(humanScore)

//Function 4: Updates round number after each round

function advanceRound(){
    currentRoundNumber=currentRoundNumber+1
    return currentRoundNumber;
}
console.log(advanceRound())

