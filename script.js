let choices = document.querySelector(".choices");
let choice = document.querySelectorAll(".choice");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");

let score = document.querySelectorAll(".score");
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");

let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let i = 0;
let j = 0;

function playGame(user_choice) {
    let randomNumber = Math.floor(Math.random() * 3) + 1; // Generate random choice on each click
    console.log("Computer choice:", randomNumber);
    console.log("Your choice:", user_choice);
    
    // Remove previous color classes before adding new one
    msg_container.classList.remove("green_color", "blue_color", "red_color");

    if (randomNumber === user_choice) {
        console.log("Draw!");
        i++;
        j++;
        user_score.innerText = i;
        comp_score.innerText = j;
        msg_container.classList.add("green_color");
        msg.classList.add("white");
        msg.innerHTML = "It's a Draw";
    } else if (
        (user_choice === 1 && randomNumber === 3) || // Rock beats Scissors
        (user_choice === 2 && randomNumber === 1) || // Paper beats Rock
        (user_choice === 3 && randomNumber === 2)    // Scissors beats Paper
    ) {
        console.log("You win!");
        i++;
        user_score.innerText = i;
        msg_container.classList.add("blue_color");
        msg.classList.add("white");
        msg.innerHTML = "You Win!!";
    } else {
        console.log("Computer wins!");
        j++;
        comp_score.innerText = j;
        msg_container.classList.add("red_color");
        msg.classList.add("white");
        msg.innerHTML = "Computer Wins!!";
    }
}

rock.addEventListener("click", () => playGame(1));
paper.addEventListener("click", () => playGame(2));
scissor.addEventListener("click", () => playGame(3));
