
'use strict';

// Get buttons and pause box from HTML
let pauseBox = document.getElementById("pause");

let pauseBtn = document.getElementById("pause_button");
let resumeBtn = document.getElementById("resume_button");
let restartBtn = document.getElementById("restart_button");
let exitBtn = document.getElementById("Exit");

// Add event listeners
if (pauseBtn) {
    pauseBtn.addEventListener("click", pauseGame);
}

if (resumeBtn) {
    resumeBtn.addEventListener("click", resumeGame);
}

if (restartBtn) {
    restartBtn.addEventListener("click", restartGame);
}

if (exitBtn) {
    exitBtn.addEventListener("click", exitGame);
}

function pauseGame() {
    game_save();

    game_end();

    pauseBox.style.display = "block";
}

function resumeGame() {
    pauseBox.style.display = "none";

    game_start();
}

function restartGame() {
    pauseBox.style.display = "none";

    // Reset fish and fishing hook here

    game_start();
}

function exitGame() {
    let answer = confirm("Are you sure you want to exit the game?");

    if (answer) {
        game_save();
        game_end();

        window.location.href = "index.html";
    }
}
