// timer for the game. Please move to main program when needed and also delete the test html (timertest.html)!!
function startTimer(){
    let time = 30; // set time here
    const timer = setInterval(function(){
        let display = document.getElementById('timer'); //make sure the id matches in final html
        display.innerHTML= time + "s";
        time -= 1;
        if (time < 0) { // time over 
            clearInterval(timer);
            display.innerHTML= "time over!"
        }
    }, 1000);
}

//this is only for test purposes. tie timer to game start when implementing :DD
const button = document.getElementById('start');
button.addEventListener("click", startTimer)