
let fish = document.getElementById('fish');

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
    hook.classList.remove('triangle-down');
    hook.classList.add('test');

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
            hook.classList.add('triangle-down');
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

    const hook = document.getElementById('hook'); //stops the rotation when the hook is clicked
    hook.addEventListener("click", (event)=>{
        clearInterval(rotator);
        hookCatch();
    })

}
const button = document.getElementById('start');
button.addEventListener("click", hookRotation)




