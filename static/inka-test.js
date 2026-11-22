
function hookRotation() {
    let degree = 0; 
    let timesLeft = 0;
    let timesRight = 0;
    var rotator = setInterval(function(){
        let hook = document.getElementById('hook');
        hook.style.transform = `rotate(${degree}deg)`; // hook element has to have its own style with 'transform: rotate(0deg);'

        if (degree == 90) { // set how far the hook rotates to left here
            timesLeft += 1;
        }
        if (degree == -90) { // set how far the hook rotates to right here
            timesRight += 1;
        }

        //the hook can rotate right only once it has fully moved to the left and vice versa
        if (timesLeft == timesRight) { 
            degree +=1;
        } else {
            degree -=1;
        }
        
    }, 1);

    const hook = document.getElementById('hook'); //stops the rotation when the hook is clicked
    hook.addEventListener("click", (event)=>{
        clearInterval(rotator);
    })

}
const button = document.getElementById('start');
button.addEventListener("click", hookRotation)




