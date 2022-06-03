//declare the prompt module interface
const prompt = require('prompt-sync')();
// declare the instructions
const instructions = "Guess a number. A correct answer is 1 point and an incorrect answer is 0 points"
let score = 0;
let username = "";
const generateRandom = (min, max)=>{
  return Math.floor( Math.random() * max + min )
}

// print out the instructions
console.log(instructions);
// to start the game, prompt the user to enter his username 
username = prompt("Enter Your username:   ")
console.log(`Welcome ${username}!`);
console.log();

//start the questions
startGame()


function startGame(){
  //Set the level to 1
  let level = 1;
  //set up only 3 levels
  while(level <= 3){
    console.log(`Level: ${level}`);
    let input = prompt(`Guess a number in the range from 1 to ${level + 1}:   `);
    // check if the user guessed right
    if(input == generateRandom(1, Number(level + 1) )){
      score +=1;
      level+= 1;
      console.log(`Correct answer!. ${username} has ${score} points`);
      console.log();
    }else{
     break;
    }
  }
  if(score <=1){
    console.log();
    console.log(`Oopps! ${username} lost with ${score} points`);
    console.log();
    askUserToStartAgain()
    console.log();
  }else{
    console.log();
    console.log(`Congrats!. ${username} won with ${score}
points`);
    console.log();
    askUserToStartAgain()
  }
   
}
function askUserToStartAgain(){
  let userChoice =  prompt("Would you like to play again(Y/N):   ")
    switch(userChoice){
      case 'Y': 
      case 'y': 
        score = 0
        startGame()
        break;
      case 'N':  
      case 'n': return;
        break;
      default: 
        console.log("Incorrect input");
        askUserToStartAgain()
        console.log();
    }
      
}
