
function checkOverlap(hook) {
    const hookBorder = hook.getBoundingClientRect();
    const fishBorder = fish.getBoundingClientRect();

    return !(hookBorder.top > fishBorder.bottom ||
    hookBorder.right < fishBorder.left ||
    hookBorder.bottom < fishBorder.top ||
    hookBorder.left > fishBorder.right
    )
}

function hookCatch() {
    let hook = document.getElementById('hook');
    hook.classList.remove('triangle-down'); // check that style matches
    hook.classList.add('reel'); // check that style matches
    
    let reelLength = 4;
    let touchBorder = false;

    const reel = setInterval(function() {
        hook.style.height = reelLength +"px"; 

        if (reelLength == 200){ // insert here condition when reel returns
            touchBorder = true;
        } 
        if (reelLength < 4) { // when reel is back at starting position it starts the rotation again
            clearInterval(reel);
            hook.classList.remove('test');
            hook.classList.add('reel');
            hookRotation();
        }

        if (touchBorder == false) {
            reelLength += 1;
        } else {
            reelLength -= 1;
        }
        
        let isOverlap = checkOverlap(hook); // checks if hook and fish elements are overlapping
        if (isOverlap == true) { // insert here what happens when fish is caught
            alert("voitit!");
        }
  
    }, 1);
}

function hookRotation() {
    let degree = 0; 
    let timesLeft = 0;
    let timesRight = 0;
    var rotator = setInterval(function(){
        let hook = document.getElementById('hook');
        hook.style.transform = `rotate(${degree}deg)`; // hook element has to have its own style with 'transform: rotate(0deg);'

        //the hook can rotate right only once it has fully moved to the left and vice versa
        // in starting position (0deg) hook points straight down
        if (degree == 90) { // set how far the hook rotates to left here
            timesLeft += 1;
        }
        if (degree == -90) { // set how far the hook rotates to right here
            timesRight += 1;
        }
        
        if (timesLeft == timesRight) { 
            degree +=1;
        } else {
            degree -=1;
        }
        
    }, 1);
}

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