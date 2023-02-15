//Toggle rules
const rules = document.getElementById("rules");
const rulesImage = document.getElementById("rules-image");
const myGame = document.getElementById("my-game");
const audio = document.getElementById("audio");
const audioS = document.getElementById("audioS");
const outputImage = document.querySelector(".output");
const icons = document.querySelectorAll(".buttons button");
const results = document.getElementById("results");
const pScore = document.getElementById("p-score");
const cScore = document.getElementById("c-score");

let playerChoice = "";
let computerChoice = "";
let scoresp1c1 = [0, 0];
const toggle = () => {
  if (rulesImage.style.display === "none") {
    rulesImage.style.display = "block";
    myGame.style.display = "none";
  } else {
    rulesImage.style.display = "none";
    myGame.style.display = "block";
  }
};
rules.addEventListener("click", () => {
  toggle();
});

//Make selected item as active.
const active = icons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    icons.forEach((iconnew) => {
      iconnew.classList.remove("active");
      if (iconnew.id === icon.id) {
        icon.classList.add("active");
        playerChoice = icon.id;
        audio.play();
      }
    });
    //   //call computer player function
    playComputer();
  });
});
//Computer game function
const playComputer = () => {
  const icons = ["rock", "paper", "scissor", "spock", "lizard"];
  const randomVal = Math.floor(Math.random() * 5);
  outputImage.src = `./assets/${icons[randomVal]}.svg`;
  computerChoice = icons[randomVal];
  //compare icons
  compareIcons();
};
//Compare Icons Functions
const compareIcons = () => {
  //check if tie
  if (playerChoice === computerChoice) {
    results.textContent = "It's a TIE";
    return;
  }
  //Player gets rock
  if (playerChoice === "rock") {
    if (computerChoice === "scissor" || computerChoice === "lizard") {
      results.textContent = "You Win!";
      calculateScore(0);
      return;
    } else {
      results.textContent = "Computer Wins!";
      calculateScore(1);
      return;
    }
  }
  //   player gets paper
  if (playerChoice === "paper") {
    if (computerChoice === "scissor" || computerChoice === "lizard") {
      results.textContent = "Computer Wins!";
      calculateScore(1);
      return;
    } else {
      results.textContent = "You Win!";
      calculateScore(0);
      return;
    }
  }
  //   player gets Scissor
  if (playerChoice === "scissor") {
    if (computerChoice === "rock" || computerChoice === "spock") {
      results.textContent = "Computer Wins!";
      calculateScore(1);
      return;
    } else {
      results.textContent = "You Win!";
      calculateScore(0);
      return;
    }
  }
  //   player gets Spock
  if (playerChoice === "spock") {
    if (computerChoice === "paper" || computerChoice === "lizard") {
      results.textContent = "Computer Wins!";
      calculateScore(1);
      return;
    } else {
      results.textContent = "You Win!";
      calculateScore(0);
      return;
    }
  }
  //   player gets lizard
  if (playerChoice === "lizard") {
    if (computerChoice === "rock" || computerChoice === "scissor") {
      results.textContent = "Computer Wins!";
      calculateScore(1);
      return;
    } else {
      results.textContent = "You Win!";
      calculateScore(0);
      return;
    }
  }
};
//calculate score function
const calculateScore = (data) => {
  if (data === 0) {
    scoresp1c1[0] = scoresp1c1[0] + 1;
  } else {
    scoresp1c1[1] = scoresp1c1[1] + 1;
  }
  //call function to output score
  scoreOutput();
};
//Score output function
const scoreOutput = () => {
  pScore.textContent = scoresp1c1[0];
  cScore.textContent = scoresp1c1[1];
  checkGameOver();
};

//check game over
const checkGameOver = () => {
  //   console.log(scoresp1c1[0], scoresp1c1[1]);
  if (scoresp1c1[0] >= 10 || scoresp1c1[1] >= 10) {
    document.querySelector("#btn-input").style.display = "none";
    audioS.play();

    if (scoresp1c1[0] >= 10) {
      document.getElementById("winner1").textContent = "Winner!";
      document.getElementById("winner1").parentElement.style.backgroundColor =
        "green";
    }
    if (scoresp1c1[1] >= 10) {
      document.getElementById("winner2").textContent = "Winner!";
      document.getElementById("winner2").parentElement.style.backgroundColor =
        "green";
    }
  }
};
