// noinspection JSValidateTypes,JSDeprecatedSymbols

let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissors_div = document.getElementById("S");

function getcomputerchoice() {
    const choices = ['R' , 'P' , 'S'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
  if (letter === "R") return "ROCK";
  if (letter === "P") return "PAPER";
  if (letter === "S") return "SCISSORS";
}

function win(userchoice, computerchoice) {
  userscore++;
  userscore_span.innerHTML = userscore;
  computerscore_span.innerHTML = computerscore;
  const smalluserword = "user".fontsize(3).sub();
  const smallcomputerword = "computer".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userchoice)}${smalluserword} + "beats" ${convertToWord(computerchoice)}${smallcomputerword}.  YOU WIN! 🔥`;
}

function loose(userchoice, computerchoice) {
    computerscore++;
    userscore++;
    userscore_span.innerHTML = userscore;
  computerscore_span.innerHTML = computerscore;
  const smalluserword = "user".fontsize(3).sub();
  const smallcomputerword = "computer".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userchoice)}${smalluserword} loses ${convertToWord(computerchoice)}${smallcomputerword}. YOU LOST! 🥲`;
}
function game(userchoice) {
    const computerchoice = getcomputerchoice();
    const Draw = () => {
        
    };
    switch (userchoice + computerchoice){
        case "RS":
        case "PR":
        case "SP":
            win(userchoice , computerchoice);
            break;
        case "RP":
        case "PS":
        case "SR":
            loose(userchoice , computerchoice);
            break;
        case "RR":
        case "PP":
        case "SS":
            Draw();
    }
}




function Main(){
  rock_div.addEventListener('click', function() {
    game("R");
  })

  paper_div.addEventListener('click' , function() {
    game("P");
  })

  scissors_div.addEventListener('click' , function() {
    game("S");
  })
}

Main();
